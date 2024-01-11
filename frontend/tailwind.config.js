/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'min': '320px', 'max': '480px' },
      'desktop': { 'min': '1024px', 'max': '1200px' }
    },
  },
  plugins: [],
}