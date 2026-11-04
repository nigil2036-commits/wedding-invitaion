/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kumkum: {
          light: '#8B1E2B',
          DEFAULT: '#6B0F1A',
          dark: '#45060E',
          deep: '#300207'
        },
        gold: {
          light: '#F7E7A9',
          warm: '#F5D061',
          DEFAULT: '#D4A017',
          dark: '#AA7C11',
          zari: '#E5B842'
        },
        turmeric: {
          DEFAULT: '#E5A93C',
          bright: '#F4B942',
          light: '#FCEFD2'
        },
        banana: {
          light: '#429357',
          DEFAULT: '#2E6F40',
          dark: '#1C4A28'
        },
        ivory: {
          DEFAULT: '#FFFDF7',
          soft: '#FBF8F0',
          dark: '#F3EBD8'
        },
        jasmine: {
          DEFAULT: '#FCFCF7',
          petal: '#FFFFFD'
        }
      },
      fontFamily: {
        tamilTitle: ['"Noto Serif Tamil"', 'serif'],
        tamilBody: ['"Mukta Malar"', '"Catamaran"', 'sans-serif'],
        engTitle: ['"Cormorant Garamond"', 'serif'],
        engBody: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 160, 23, 0.45)',
        'maroon-deep': '0 10px 30px rgba(70, 6, 14, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBF2D5 0%, #D4A017 50%, #8C650B 100%)',
        'zari-border': 'repeating-linear-gradient(45deg, #D4A017, #D4A017 4px, #F5D061 4px, #F5D061 8px)',
      }
    },
  },
  plugins: [],
}

