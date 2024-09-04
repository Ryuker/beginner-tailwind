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
<div class="text-gray-600">
```

- changed color of home link | `text-teal-800`
- added hover color to all other links | `hover:text-gray-900`
- added hover color and transition to `Get Course` link
``` HTML
<a href="#" class="inline-block p-3 bg-purple-300 hover:bg-purple-200 text-purple-700 hover:text-purple-600 rounded shadow hover:shadow-xl transition duration-500">Get the Course</a>
```

## Adding responsive styling
- hid the remaining left side links on mobile size
``` HTML
<a href="#" class="hidden lg:inline-block hover:text-gray-900">About</a>
```
- hid the 'Get The Course' link as well
``` HTML
<a href="#" class="hidden lg:inline-block p-3 bg-purple-300 hover:bg-purple-200 text-purple-700 hover:text-purple-600 rounded shadow hover:shadow-xl transition duration-500">Get the Course</a>
```
- vertical centered the right side contents
``` HTML
<div class="flex items-center space-x-4">
```

# 09. Hero section
- added hero HTML skeleton
``` HTML
<div>
  <div class="container mx-auto px-6 lg:px-0 text-center">
    <!-- heading -->
    <h1>Beginner Tailwind</h1>

    <!-- paragraph -->
    <p>Make good looking designs quickly. All without a single line of custom css.</p>

    <!-- big button/ call to action -->
    <a href="#">Get The Course</a>

    <!-- teaser image -->
    <img src="https://i.imgur.com/wysbBMS.png" alt="teaser-image" />

    <!-- teaser image info box -->
      <div>
      <p>We'll create BeginnerTailwind.com (it's the site you're on now).</p> 
      <p>We'll do it all without a single line of custom CSS!</p>
    </div>
  </div>
</div>
```

- centered the container text
``` HTML
<div class="container mx-auto px-6 lg:px-0 py-24 text-center">
```

- Added bottom margins
- moved some text to the top right of the image
``` HTML
<div class="container mx-auto px-6 lg:px-0 py-24 text-center">
  <!-- heading -->
  <h1 class="mb-4">Beginner Tailwind</h1>

  <!-- paragraph -->
  <p class="mb-8">Make good looking designs quickly. All without a single line of custom css.</p>

  <!-- big button/ call to action -->
  <a href="#" class="inline-block mb-32">Get The Course</a>

  <!-- teaser image -->
  <div class="relative">
    <img src="https://i.imgur.com/wysbBMS.png" alt="teaser-image" />

    <!-- teaser image info box -->
    <div class="absolute top-0 right-0 bg-yellow-100 transform translate-x-4 -translate-y-4">
      <p>We'll create BeginnerTailwind.com (it's the site you're on now).</p> 
      <p>We'll do it all without a single line of custom CSS!</p>
    </div>
  </div>
</div>
```

## Styling the Hero section
- h1 styling
  - made the text large and extra bold
``` HTML
<h1 class="mb-4 text-6xl font-extrabold">Beginner Tailwind</h1>
```
- added text gradient
``` HTML
<h1 class="mb-4 text-6xl font-extrabold ">
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">Beginner</span> 
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">Tailwind</span>
</h1>
```

- added styling to hero paragraph
``` HTML
<!-- paragraph -->
<p class="mb-8 text-2xl text-gray-700">Make good looking designs quickly. All without a single line of custom css.</p>
```

- Added styling to 'Get The Course' button
``` HTML
<!-- big button/ call to action -->
<a href="#" class="inline-block mb-32 py-3 px-12 rounded bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 font-bold text-lg tracking-wide text-purple-100 hover:text-white shadow-lg hover:shadow-2xl transition duration-500">Get The Course</a>
```

- Added image styling, border etc
``` HTML
<img src="https://i.imgur.com/wysbBMS.png" alt="teaser-image" class="rounded-lg shadow-2xl border-4 border-purple-200"/>
```

- added styling to teaser image info box
``` HTML
<!-- teaser image info box -->
  <div class="absolute top-0 right-0 bg-yellow-50 transform translate-x-4 -translate-y-4 text-left py-4 px-8 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500">
    <p>
      <strong class="font-bold">We'll create BeginnerTailwind.com</strong>
      <span class="opacity-50">(it's the site you're on now)</span>
    </p> 
    <p>We'll do it all without a single line of custom CSS!</p>
  </div>
</div>
```

# 10. Making the background more fun to look at
- wrapped the navigation and hero in a div with a gradient on it
``` HTML
<div class="bg-gradient-to-br from-white to-gray-300">
  <!-- navigation -->
  <!-- hero -->
</div>
```
left vid at: 05:40:17