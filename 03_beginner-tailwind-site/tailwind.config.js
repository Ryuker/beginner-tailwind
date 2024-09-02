const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  purge: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    },
  },
  plugins: [],
}

