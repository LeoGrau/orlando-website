/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const tailwindcssprimeui = require('tailwindcss-primeui')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[class="p-dark"]'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [tailwindcssprimeui]
}
