/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/modules/*.js', './dist/*.{html,js}', './src/index.js'],
  theme: {
    colors: {
      coffee: {
        light: '#62555C',
        DEFAULT: '#433a3fff',
        dark: '#372F33',
      },
      blue: {
        light: '#517890',
        DEFAULT: '#3d5a6cff',
        dark: '#334C5B',
      },
      teal: {
        light: '#8DB9A5',
        DEFAULT: '#72a98fff',
        dark: '#4E7E68',
      },
      green: {
        light: '#AEEE95',
        DEFAULT: '#8de969ff',
        dark: '#79E250',
      },
      lime: {
        light: '#D4F269',
        DEFAULT: '#cbef43ff',
        dark: '#BFEB1E',
      },
    },
    extend: {},
  },
  plugins: [],
}
