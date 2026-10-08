/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: { DEFAULT: '#0325A1', 700: '#021D82', 50: '#EEF1FB' },
        leaf: { DEFAULT: '#38A901', 700: '#2C8601', 50: '#EFF9E8' },
        saffron: { DEFAULT: '#F9A03C', 700: '#E88A1F' },
        gold: '#F5B942',
        ink: '#0B0B0B',
        warm: '#FAFAF7',
      },
      fontFamily: { sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'], serif: ['Source Serif 4', 'Georgia', 'serif'] },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(3,37,161,0.15)',
        lift: '0 18px 40px -14px rgba(3,37,161,0.28)',
      },
    },
  },
  plugins: [],
}
