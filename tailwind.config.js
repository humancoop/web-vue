const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
        teal:colors.teal,
        gray:colors.coolGray,
        white:colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
