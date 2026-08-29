/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a1936',      // Deep navy from "living" & "CORPORATION"
          navyLight: '#14254b',
          blue: '#0062eb',      // Vibrant bright blue from "hub"
          blueLight: '#3b82f6',
          blueDark: '#004ec4',
          cyan: '#00b4d8',      // Bright cerulean from logo gradient
          cyanLight: '#e0f2fe',
          surface: '#ffffff',
          surfaceAlt: '#f8fafc',
          surfaceTint: '#f0f7ff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
