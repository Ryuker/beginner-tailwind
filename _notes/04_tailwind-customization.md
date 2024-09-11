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

# 05. Adding to spacing classes
- these come in addition to the number for spacing.
  - could be usefull
``` JS tailwind.config.js
extend: {
  // add on to the tailwind classes
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  }
}
```

# 06. Adding a Font Family
- adding `varela` font to font family
  - from https://fonts.google.com/

- added to head of html
``` HTM index.html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
```

- added the font to tailwind.config.js
``` JS tailwind.config.js
fontFamily: {
  fun: ['Varela Round', 'sans-serif'],
}
```
- usage: use `font-fun` on any html element in the class parameter
``` HTML
<h1 class="font-fun
```

# 07. Extracting Tailwind Styles
explanation of [functions and directives](https://tailwindcss.com/docs/functions-and-directives)
## example of cutting the bg gradient from the html
- changed class of header to `<div class="header-nav">`
- Added `src/styles.css`
``` CSS src/styles.css
@tailwind base;

@tailwind components;

@tailwind utilities;

.header-nav {
  @apply bg-gradient-to-br from-gray-100 to-gray-300;
}
```

- imported styles.css into main.js
``` JS main.js
import './src/styles.css';
```

- ! It's advisable to use this sparingly, since it's the older way of doing css
  - to know what styles an element has we need to go to the styles file
  - but in most cases it's better to show this in the HTML directly.






left vid at: 08:31:53