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


left vid at: 08:31:53