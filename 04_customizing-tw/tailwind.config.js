const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    // overwrite tailwind classes
    extend: {
      // add on to the tailwind classes
      colors: {
        teal: colors.teal,
        fakered: "#ff0000",
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },

      fontFamily: {
        fun: ['Varela Round', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

