const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    // overwrite tailwind classes
    extend: {
      // add on to the tailwind classes
    },
  },
  plugins: [ require("tailwindcss/typography")],
}

