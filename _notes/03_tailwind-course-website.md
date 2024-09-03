# Tailwind Course Website Notes

# 01. Setup VS Code
## Setup with Vite
Setup Vite
``` shell 04-course-site
npm create vite@latest 03_beginner-tailwind-site --template vanilla
```
- deleted some folders and boilerplate stuff from vite

## Setup Tailwind 
``` shell 03_beginner-tailwind-site
npm install -D tailwindcss

```
## Setup Tailwind config file with post processing
``` shell 03_beginner-tailwind-site
npx tailwindcss init -p
```
- the `-p` creates a Tailwind config file and a postcss file
- settings:
``` js tailwind.config.js
content: ["./*.{html,js}"],
```
  - this is important else it won't touch the main.js file in time and the utility classes won't be available.

## Importing tailwind into the website
- added import to `main.js`
- made sure main.js is loaded into the `index.html`
``` js main.js
import 'tailwindcss/tailwind.css';
```



# 02. Styling the body
- added very basic body styling to test if Tailwind classes are available.
```html index.html
<body class="bg-blue-400 min-h-screen">
  <h2 class="bg-red-500 text-9xl">yo there</h2>
</body>
```

# 03. Purging unused CSS classes
- by default tailwind compiles with all the css classes
- to purge them out we add a purge instruction to `tailwind.config`

``` JS tailwind.config.js
purge: [
  './*.html',
],
```

# 04. Custom color palette configuration
- added colors import to tailwind.config
```js tailwind.config.js
const colors = require('tailwindcss/colors');
```
- to add it we  add 
``` JS tailwind.config.js
theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    },
  },
```

# 05. Deployment
- tutorial deploys it to netlify but I don't want to do that yet.

# 06. VS Code Settings
- mostly just using the Tailwind CSS Intellisense is really recommened but I already had that installed.

# 07. Setting up HTML
- cleaned up index.html
- added section comments
``` HTML index.html
<!-- header/navigation ====================-->
<!-- hero =================================-->
<!-- overview =============================-->
<!-- about me =============================-->
<!-- what you'll learn ====================-->
<!-- what we'll build =====================-->
<!-- pricing ==============================-->
<!-- faq ==================================-->
<!-- footer/newsletter ====================-->
```

# 08. Header/navigation
- added HTML skeleton for links
``` HTML
<div>
  <!-- left header section -->
  <a href="#">Beginner Tailwind</a>
  <a href="#">About</a>
  <a href="#">What You'll Learn</a>
  <a href="#">Pricing</a>
  <a href="#">FAQ</a>
  
  <!--  right header section -->
  <a href="#">Login</a>
  <a href="#">Get the Course</a>
</div>
```
- styled wrapping container
``` HTML
<div class="container mx-auto flex justify-between px-6 lg:px-0 py-6">
```
- added spacing between links and centered them
``` HTML 
<!-- left section -->
<div class="flex items-center space-x-4">
<!-- other code -->

<!-- right  -->
<div class="flex items-center space-x-4">
```
- Made home link bold
``` HTML
<a href="#" class="font-bold text-2xl">Beginner Tailwind</a>
```

- Made the links gray using a class on the wrapping div
``` HTML
<div class="text-gray-700">
```




left vid at: 05:00:38