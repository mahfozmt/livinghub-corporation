import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('downloaded_photos_hd');

const TARGETS = [
  {
    name: 'esimglobalnetworks',
    url: 'https://www.facebook.com/esimglobalnetworks/photos'
  },
  {
    name: 'LivingHub.tech',
    url: 'https://www.facebook.com/LivingHub.tech/photos'
  }
];

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.facebook.com/'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(destPath, () => {});
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function scrapeHighRes(browser, target) {
  console.log(`\n========================================`);
  console.log(`High-Res Processing: ${target.name} (${target.url})`);
  console.log(`========================================`);

  const targetDir = path.join(OUTPUT_DIR, target.name);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  );

  try {
    await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 45000 });
  } catch (e) {
    console.warn(`Navigation warning for ${target.name}:`, e.message);
  }

  // Dismiss cookies/dialogs
  try {
    const closeButtons = await page.$$('div[aria-label="Close"], div[role="button"][aria-label="Close"], [aria-label="Decline optional cookies"], [aria-label="Allow all cookies"]');
    for (const btn of closeButtons) {
      await btn.click().catch(() => {});
    }
  } catch (e) {}

  // Scroll down a few times to load all thumbnails in the photos tab
  console.log('Scrolling to discover all photo links...');
  for (let i = 0; i < 6; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    await new Promise(r => setTimeout(r, 1500));
    try {
      const closeDialog = await page.$('div[role="dialog"] [aria-label="Close"]');
      if (closeDialog) await closeDialog.click().catch(() => {});
    } catch (e) {}
  }

  // Find all photo links (href containing /photo/ or /photo.php or /photos/)
  const photoLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="/photo"]'));
    return anchors
      .map(a => a.href)
      .filter(href => href.includes('fbid=') || href.includes('/photos/') || href.includes('/photo/'))
      .filter((v, i, a) => a.indexOf(v) === i);
  });

  console.log(`Found ${photoLinks.length} photo permalinks for ${target.name}.`);

  const highResImageUrls = new Set();

  if (photoLinks.length > 0) {
    // We can visit individual photo links or click through them
    for (let i = 0; i < photoLinks.length; i++) {
      const photoUrl = photoLinks[i];
      console.log(`[${i + 1}/${photoLinks.length}] Opening ${photoUrl}...`);
      try {
        await page.goto(photoUrl, { waitUntil: 'networkidle2', timeout: 25000 });
        
        // Wait a little for high-res image to render
        await new Promise(r => setTimeout(r, 2000));

        // Dismiss popup if present
        try {
          const closeBtn = await page.$('div[role="dialog"] [aria-label="Close"]');
          if (closeBtn) await closeBtn.click().catch(() => {});
        } catch (e) {}

        // Extract high res image from theater/page
        const bestImage = await page.evaluate(() => {
          // Look for media viewer image or largest natural width/height image
          const imgs = Array.from(document.querySelectorAll('img[data-visualcompletion="media-vc-image"], div[role="dialog"] img, img'));
          let bestSrc = null;
          let maxArea = 0;

          for (const img of imgs) {
            if (!img.src || !img.src.includes('fbcdn.net') || img.src.includes('rsrc.php') || img.src.includes('emoji.php')) {
              continue;
            }
            const width = img.naturalWidth || img.width || 0;
            const height = img.naturalHeight || img.height || 0;
            const area = width * height;

            // Specifically prioritize media-vc-image or large dimensions
            if (img.getAttribute('data-visualcompletion') === 'media-vc-image') {
              return img.src;
            }
            if (area > maxArea && width > 300 && height > 300) {
              maxArea = area;
              bestSrc = img.src;
            }
          }
          return bestSrc;
        });

        if (bestImage) {
          highResImageUrls.add(bestImage);
          console.log(`  -> Found High-Res: ${bestImage.substring(0, 80)}...`);
        } else {
          console.log(`  -> No large image found.`);
        }
      } catch (err) {
        console.warn(`  -> Error loading photo:`, err.message);
      }
    }
  } else {
    console.log('No direct photo links found, trying click & next navigation...');
    // Fallback: click first image thumbnail
    const clicked = await page.evaluate(() => {
      const firstImg = document.querySelector('a[href*="photo"], img[src*="fbcdn"]');
      if (firstImg) {
        firstImg.click();
        return true;
      }
      return false;
    });

    if (clicked) {
      for (let step = 0; step < 50; step++) {
        await new Promise(r => setTimeout(r, 2000));
        const currentSrc = await page.evaluate(() => {
          const img = document.querySelector('img[data-visualcompletion="media-vc-image"]') ||
                      document.querySelector('div[role="dialog"] img[src*="fbcdn"]');
          return img ? img.src : null;
        });

        if (currentSrc) {
          if (highResImageUrls.has(currentSrc)) {
            console.log('Reached end of gallery or repeating image.');
            break;
          }
          highResImageUrls.add(currentSrc);
          console.log(`[Gallery Step ${step + 1}] Found High-Res: ${currentSrc.substring(0, 80)}...`);
        }

        // Press right arrow to go to next photo
        await page.keyboard.press('ArrowRight');
      }
    }
  }

  console.log(`\nDownloading ${highResImageUrls.size} High-Resolution images for ${target.name}...`);
  let count = 0;
  for (const imgUrl of highResImageUrls) {
    count++;
    let ext = '.jpg';
    if (imgUrl.includes('.png')) ext = '.png';
    else if (imgUrl.includes('.webp')) ext = '.webp';

    const fileName = `hd_photo_${String(count).padStart(3, '0')}${ext}`;
    const filePath = path.join(targetDir, fileName);

    try {
      await downloadImage(imgUrl, filePath);
      const stats = fs.statSync(filePath);
      console.log(`Saved [${target.name}] HD -> ${fileName} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.warn(`Failed downloading ${imgUrl}:`, err.message);
    }
  }

  // Also replace existing files in downloaded_photos if HD versions were downloaded
  const standardDir = path.join(OUTPUT_DIR.replace('_hd', ''), target.name);
  if (!fs.existsSync(standardDir)) fs.mkdirSync(standardDir, { recursive: true });
  for (const file of fs.readdirSync(targetDir)) {
    fs.copyFileSync(path.join(targetDir, file), path.join(standardDir, file));
  }

  await page.close();
}

async function main() {
  console.log('Launching headless Chrome for HD extraction...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1920,1080'
    ]
  });

  for (const target of TARGETS) {
    try {
      await scrapeHighRes(browser, target);
    } catch (err) {
      console.error(`Error scraping HD for ${target.name}:`, err);
    }
  }

  await browser.close();
  console.log('\nAll HD photo collections completed successfully!');
}

main().catch(console.error);
