import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Slide {
  id: string;
  image: string;
  /* 'cover' for photos, 'contain' for cut-out PNGs that need breathing room. */
  fit: 'cover' | 'contain';
  /* Backdrop behind 'contain' images. */
  bg: string;
  href: string;
  external: boolean;
  domain: string;
  kickerKey: string;
  titleKey: string;
  descKey: string;
  ctaKey: string;
  chip: string;
  bar: string;
}

const SLIDES: Slide[] = [
  {
    id: 'tech-app',
    image: './media/banner-livinghub-proptech.jpg',
    fit: 'cover',
    bg: 'bg-[#0a1936]',
    href: 'https://www.livinghub.tech/',
    external: true,
    domain: 'livinghub.tech',
    kickerKey: 'hero.techBadge',
    titleKey: 'slide.techApp.title',
    descKey: 'slide.techApp.desc',
    ctaKey: 'tech.btnVisit',
    chip: 'text-[#0062eb]',
    bar: 'from-[#0062eb] to-[#00b4d8]',
  },
  {
    id: 'tech-access',
    image: './media/banner-livinghub-mobile.jpg',
    fit: 'cover',
    bg: 'bg-[#0a1936]',
    href: 'https://www.livinghub.tech/',
    external: true,
    domain: 'livinghub.tech',
    kickerKey: 'hero.techBadge',
    titleKey: 'slide.techAccess.title',
    descKey: 'slide.techAccess.desc',
    ctaKey: 'tech.btnVisit',
    chip: 'text-[#0062eb]',
    bar: 'from-[#0062eb] to-[#00b4d8]',
  },
  {
    id: 'esim-brand',
    image: './media/banner-esim-roaming.jpg',
    fit: 'cover',
    bg: 'bg-[#04122b]',
    href: 'https://esimglobalnetworks.com/',
    external: true,
    domain: 'esimglobalnetworks.com',
    kickerKey: 'hero.esgnBadge',
    titleKey: 'slide.esimBrand.title',
    descKey: 'slide.esimBrand.desc',
    ctaKey: 'esgn.btnVisit',
    chip: 'text-emerald-600',
    bar: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'esim-plans',
    image: './media/esim-about-3.png',
    fit: 'contain',
    bg: 'bg-gradient-to-br from-[#0b2a6f] via-[#123a95] to-[#0a1936]',
    href: 'https://esimglobalnetworks.com/',
    external: true,
    domain: 'esimglobalnetworks.com',
    kickerKey: 'hero.esgnBadge',
    titleKey: 'slide.esimPlans.title',
    descKey: 'slide.esimPlans.desc',
    ctaKey: 'esgn.btnVisit',
    chip: 'text-emerald-600',
    bar: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'b2b-datacenter',
    image: './media/hero-3.jpg',
    fit: 'cover',
    bg: 'bg-slate-900',
    href: '#contact',
    external: false,
    domain: 'livinghubcorp.com/b2b',
    kickerKey: 'hero.b2bBadge',
    titleKey: 'slide.b2bInfra.title',
    descKey: 'slide.b2bInfra.desc',
    ctaKey: 'b2b.btnInquire',
    chip: 'text-indigo-600',
    bar: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'b2b-network',
    image: './media/about-3-1024x576.jpg',
    fit: 'cover',
    bg: 'bg-slate-900',
    href: '#contact',
    external: false,
    domain: 'livinghubcorp.com/b2b',
    kickerKey: 'hero.b2bBadge',
    titleKey: 'slide.b2bNetwork.title',
    descKey: 'slide.b2bNetwork.desc',
    ctaKey: 'b2b.btnInquire',
    chip: 'text-indigo-600',
    bar: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'corp-team',
    image: './media/banner-corporate-synergy.jpg',
    fit: 'cover',
    bg: 'bg-[#04122b]',
    href: '#about',
    external: false,
    domain: 'livinghubcorp.com',
    kickerKey: 'carousel.badge',
    titleKey: 'slide.team.title',
    descKey: 'slide.team.desc',
    ctaKey: 'hero.ctaAbout',
    chip: 'text-[#0062eb]',
    bar: 'from-[#0062eb] to-[#00b4d8]',
  },
];

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 50;

export const VentureCarousel: React.FC = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = SLIDES.length;
  const stopped = hoverPaused || userPaused;

  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* Autoplay — halts on hover, focus, manual pause, hidden tab, reduced-motion. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || stopped) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [stopped, total]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const activeSlide = SLIDES[index];

  return (
    <section
      id="showcase"
      className="py-16 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/60 scroll-mt-24"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[520px] h-[320px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact header — the images carry the message. */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062eb] text-[11px] font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb] animate-pulse" />
              {t('carousel.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1936] tracking-tight">
              {t('carousel.title')} <span className="text-[#0062eb]">{t('carousel.titleHighlight')}</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-sm">{t('carousel.subtitle')}</p>
        </div>

        {/* Stage */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t('carousel.title')}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={() => setHoverPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[#0062eb]/40 focus-visible:ring-offset-4"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 bg-slate-900">
            {/* Autoplay progress bar — restarts on every slide change. */}
            <div className="absolute top-0 inset-x-0 h-1 bg-white/15 z-20">
              <div
                key={`${index}-${stopped}`}
                data-paused={stopped}
                style={{ ['--lh-progress-duration' as string]: `${AUTOPLAY_MS}ms` }}
                className={`lh-progress h-full bg-gradient-to-r ${activeSlide.bar}`}
              />
            </div>

            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((s, i) => {
                const active = i === index;
                return (
                  <div
                    key={s.id}
                    className="w-full shrink-0"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} / ${total}`}
                    aria-hidden={!active}
                  >
                    {/* Whole slide is one link. */}
                    <a
                      href={s.href}
                      {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      tabIndex={active ? 0 : -1}
                      className={`group block relative h-[360px] sm:h-[460px] lg:h-[560px] ${s.bg}`}
                    >
                      <img
                        src={s.image}
                        alt={t(s.titleKey)}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className={
                          s.fit === 'cover'
                            ? 'absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105'
                            : 'absolute inset-0 w-full h-full object-contain object-right p-4 sm:p-8 transition-transform duration-[1200ms] group-hover:scale-[1.03]'
                        }
                      />

                      {/* Legibility scrims */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04122b] via-[#04122b]/55 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#04122b]/80 via-[#04122b]/20 to-transparent" />

                      {/* Domain chip */}
                      <div className="absolute top-5 right-5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-mono font-semibold">
                        {s.domain}
                        <ArrowUpRight className="w-3 h-3" />
                      </div>

                      {/* Caption */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-9 lg:p-12">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                          {t(s.kickerKey)}
                        </span>
                        <h3 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 max-w-2xl drop-shadow-lg">
                          {t(s.titleKey)}
                        </h3>
                        <p className="text-white/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg mb-6">
                          {t(s.descKey)}
                        </p>
                        {/* Span, not a nested anchor — the slide itself carries the link. */}
                        <span
                          className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-xs font-bold shadow-lg transition-transform group-hover:-translate-y-0.5 ${s.chip}`}
                        >
                          {t(s.ctaKey)}
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label={t('carousel.prev')}
            className="absolute left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-slate-200 shadow-lg text-slate-700 hover:text-[#0062eb] transition-all flex items-center justify-center active:scale-95 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t('carousel.next')}
            className="absolute right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-slate-200 shadow-lg text-slate-700 hover:text-[#0062eb] transition-all flex items-center justify-center active:scale-95 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail rail */}
        <div className="mt-5 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-2.5 overflow-x-auto lh-no-scrollbar pb-1">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t('carousel.goTo')} ${i + 1}`}
                aria-current={i === index}
                className={`relative shrink-0 w-[88px] h-[56px] sm:w-[112px] sm:h-[68px] rounded-xl overflow-hidden border transition-all duration-300 ${
                  i === index
                    ? 'border-[#0062eb] ring-2 ring-[#0062eb]/30 opacity-100'
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                } ${s.bg}`}
              >
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={s.fit === 'cover' ? 'w-full h-full object-cover' : 'w-full h-full object-contain p-1'}
                />
              </button>
            ))}
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? t('carousel.play') : t('carousel.pause')}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#0062eb] shadow-sm transition-all flex items-center justify-center"
            >
              {userPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
