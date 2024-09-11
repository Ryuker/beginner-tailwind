# Customizing Tailwind Notes
run NVM use 20 to use the correct node version

# 01. Setup
- copied over 'beginner-tailwind-site' project files
- ran `npm i` to install node dependencies
- verifies site is working

# 02. Customizing Intro
- everything in the theme object overwrites tailwind classes
- everything in the extend object (nested in the theme object)
  - adds on to the tailwind classes
``` JS tailwind.config.js
theme: {
  // overwrite tailwind classes
  extend: {
    // add on to the tailwind classes
    colors: {
      teal: colors.teal
    }
  },
},
```

# 03. Colors example
- this overwrites the colors object, resulting in only the red color to be available.
```JS tailwind.config.js
theme: {
// overwrite tailwind classes
colors: {
  red: "#ff0000",
},
```

## adding on to the classes example
- added fakered for usage in html, but all the other color classes stay intact
``` JS tailwind.config.js
extend: {
  // add on to the tailwind classes
  colors: {
    teal: colors.teal,
    fakered: "#ff0000",
  }
},
```

# 04. Replacing Opacity classes
- it's easy to overwrite the opacity classes like so
  - gives more flexibility
``` JS tailwind.config.js
theme: {
  opacity: {
    '0': '0',
    '20': '0.2',
    '40': '0.4',
    '60': '0.6',
    '80': '0.8',
    '100': '1',
  },
}
```


left vid at: 08:31:53