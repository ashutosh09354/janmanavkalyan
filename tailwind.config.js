/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: { DEFAULT: '#18354B', 700: '#122A3C', 50: '#EDF2F4' },
        leaf: { DEFAULT: '#4D794B', 700: '#3C633B', 50: '#EEF4EA' },
        saffron: { DEFAULT: '#E8A24A', 700: '#D38D35' },
        gold: '#E5B85C',
        ink: '#283238',
        warm: '#FBFAF6',
      },
      fontFamily: { sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'], serif: ['Source Serif 4', 'Georgia', 'serif'] },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(24,53,75,0.10)',
        lift: '0 18px 40px -14px rgba(24,53,75,0.20)',
      },
    },
  },
  plugins: [],
}
