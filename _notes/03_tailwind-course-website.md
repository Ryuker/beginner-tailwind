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
## BG Gradient
- wrapped the navigation and hero in a div with a gradient on it
``` HTML
<div class="bg-gradient-to-br from-white to-gray-300">
  <!-- navigation -->
  <!-- hero -->
</div>
```

## BG Circles
- added left circle decoration divs with styling
  - it's fairly simple using a gradient and some margin offsets
  - it's import to have it positioned absolute and then have the navigation and hero positioned `relative`
    - this goes on their wrapping div.
``` HTML
<!-- left circle decoration -->
<div class="absolute top-0 left-0 transform translate-x-4 translate-y-4">
  <div class="absolute bg-gradient-to-br from-teal-50 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
  <div class="absolute ml-10 mt-10 bg-gradient-to-br from-purple-50 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
  <div class="absolute ml-24 bg-gradient-to-br from-red-50 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
</div>
```

- added right circle decoration
  - the same design but offset from the top and positioned to the right of the screen
  - colors increased because they are lighter on the gradient
``` HTML
<div class="absolute top-0 right-0 mr-48 transform -translate-x-64 translate-y-64">
  <div class="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
  <div class="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
  <div class="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
</div>
```

# 11. Responsiveness of Hero section
- made sure the right circle decorations are hidden on mobile
``` HTML
<div class=" hidden lg:block
```
- modified hero heading to change to a smaller text size on mobile
``` HTML
<div class="text-5xl lg:text-6xl
```
- modified header paragraph to shift to a smaller text size on mobile
``` HTML
<div class="text-lg lg:text-2xl
```

- modified image info box to only translate on large screens
  - done by adding `lg:` infront of the absolute posititioning and the transform and translate classes
  - also gave it responsive padding `py-4 mt-8 lg:mt-0`

- also made the info box resize the `it's the site you're on now` portion responsively
  - this wasn't in the tutorial
``` HTML
<!-- teaser image info box -->
<div class="lg:absolute top-0 lg:right-0 bg-yellow-50 lg:transform lg:translate-x-4 lg:-translate-y-4 text-left py-4 mt-8 lg:mt-0 px-8 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500">
  <p class="flex sm:inline-block sm:flex-col">
    <strong class="font-bold">We'll create BeginnerTailwind.com</strong>
    <span class="bg-yellow-50 sm:bg-transparent absolute sm:relative right-0 pr-2 sm:pr-0 sm:left-0 sm:t-sm:right-0 transform -translate-y-5 sm:transform-none sm:-transform-y-none opacity-50 flex justify-end sm:inline-block">(it's the site you're on now)</span>
  </p> 
  <p>We'll do it all without a single line of custom CSS!</p>
</div>
```

- added responsive margin to hero button
``` HTML
<div class="mb-16 lg:mb-32
```

# 12. Overview Layout

## HTML Skeleton
- added overview section HTML skeleton
``` HTML
<div>
  <div>
    <h2>Writing CSS is tough stuff!</h2>
    
    <div>
      <!-- left column -->
      <div>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>

      <!-- right column -->
      <div>
        <div>What classes should I use?</div>
        <div>How do I make things look good?</div>
        <div>My design looks basic?</div>
        <div>How do I do responsive?</div>
        <div>Why does my typography look so bad?</div>
      </div>
    </div>
  </div>
</div>
```

# Layout Positioning
- modified overview with basic background, flexing and margins/padding
``` HTML
<div class="bg-purple-700 py-24">
  <div class="container mx-auto px-6 lg:px-0">
    <h2 class="text-6xl font-bold">Writing CSS is tough stuff!</h2>
    
    <div class="flex space-x-16">
      <!-- left column -->
      <div class="w-2/3 bg-white p-16">
        <p>Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS framework. If you want a CSS framework that has pre-built components, then Tailwind may not be for you. If you want a CSS framework that lets you design quickly and customize your site, then Tailwind is gonna be a lot of fun.</p>
        <p>After using Bulma to build Scotch.io, my CSS files became littered with my own!importantclasses to override the framework's styles. Tailwind doesn't have the !importantproblem since all our elements are designed on the fly.</p>
        <p>Important Note: Tailwind lets us design quickly, but this doesn't mean that you don't need CSS knowledge however. To use Tailwind, you need to have a good understanding of CSS properties. In this course, we will learn Tailwind and we'll also learn CSS conceptsto create good looking designs. Tailwind is the ultimate CSS shorthand, but we still need to learn the CSS, which we'll do in this course.</p>
        <p>"This isn't just a Tailwind course. This is also a "learn how to design with CSS" course</p>
        <p>The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go well together. We'll be writing a lot of Tailwind in this course so that the repetition will help us commit Tailwind classes to memory.</p>
      </div>

      <!-- right column -->
      <div class="flex-grow space-y-4 text-lg italic">
        <div class="bg-purple-800 p-10 rounded-lg text-purple-200">What classes should I use?</div>
        <div class="bg-purple-800 p-10 rounded-lg text-purple-200">How do I make things look good?</div>
        <div class="bg-purple-800 p-10 rounded-lg text-purple-200">My design looks basic?</div>
        <div class="bg-purple-800 p-10 rounded-lg text-purple-200">How do I do responsive?</div>
        <div class="bg-purple-800 p-10 rounded-lg text-purple-200">Why does my typography look so bad?</div>
      </div>
    </div>
  </div>
</div>
```

## Styling of Overview Header
``` HTML
<h2 class="mb-10 text-6xl font-bold text-purple-50">Writing CSS is tough stuff!</h2>
```

## Styling of Overview Left Column
- rounded the column, 
- added a shadow
- gave it an overval text color, size and y spacing
``` HTML
<div class="flex space-x-16">
  <!-- left column -->
  <div class="w-2/3 bg-white p-16 rounded shadow-2xl text-gray-800 text-lg space-y-8">
```

## Making elements in the left column paragraphs pop
- styled paragraphs
  - 
``` HTML
<!-- left column -->
<div class="w-2/3 bg-white p-16 rounded shadow-2xl text-gray-800 text-xl leading-relaxed">
  <p class="mb-8">Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS framework. If you want a CSS framework that has pre-built components, then Tailwind may not be for you. If you want a CSS framework that lets you design quickly and customize your site, then <strong class="font-bold text-teal-500">Tailwind is gonna be a lot of fun.</strong></p>

  <p class="mb-8">After using Bulma to build <a href="https://scotch.io" class="text-blue-500">Scotch.io</a>, my CSS files became littered with my own <code class="inline-block px-1 bg-gray-200 text-red-700 text-xs font-mono">!important</code>classes to override the framework's styles. Tailwind doesn't have the <code class="inline-block px-1 bg-gray-200 text-red-700 text-xs font-mono">!important</code>problem since all our elements are designed on the fly.</p>

  <p class="mb-12"><strong class="font-bold">Important Note:</strong> Tailwind lets us design quickly, but this doesn't mean that you don't need CSS knowledge however. To use Tailwind, you need to have a good understanding of CSS properties. In this course, <strong class="font-bold">we will learn Tailwind and we'll also learn CSS concepts</strong> to create good looking designs. <strong class="font-bold">Tailwind is the ultimate CSS shorthand</strong>, but we still need to learn the CSS, which we'll do in this course.</p>

  <p class="relative mb-8 text-3xl italic"><span class="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-purple-600 text-6xl scale-150 italic opacity-25">"</span>This isn't just a Tailwind course. This is also a "learn how to design with CSS" course</p>
  <p>The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go well together. We'll be writing a lot of Tailwind in this course so that the repetition will help us commit Tailwind classes to memory.</p>
</div>
```

## Overlapping elements with the BG to make for a fluid design
- added div to hero section to function as purple bar
  - it's positioned absolute and covers the full width of the screen
``` HTML
<!-- purple bar to help with the section transition -->
<div class="absolute bottom-0 inset-x-0 h-64 bg-purple-700"></div>
```
- reduced the y padding by half on the overview section
``` HTML
<div class="pb-24 pt-12
```

- added gray div to overview section for same effect
  - important to make the parent div `relative` and also the div of the overview container.
    - this way the overview container is positioned over the absolute positioned element.
``` HTML
<!-- purple bar to help with the section transition -->
<div class="absolute bottom-0 inset-x-0 h-64 bg-gray-200"></div>
```

## Responsiveness of Overview section
- added responsive variations from lg:
  - mostly padding, spacing and conditional flexing

``` HTML
<div class="relative container mx-auto px-6 lg:px-0">
  <h2 class="mb-10 text-4xl lg:text-6xl font-bold text-purple-50">Writing CSS is tough stuff!</h2>
  
  <div class="lg:flex lg:space-x-16 space-y-8 lg:space-y-0">
    <!-- left column -->
    <div class="lg:w-2/3 bg-white p-12 lg:p-16 rounded shadow-2xl text-gray-800 text-xl leading-relaxed">
      <p class="mb-8">Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS framework. If you want a CSS framework that has pre-built components, then Tailwind may not be for you. If you want a CSS framework that lets you design quickly and customize your site, then <strong class="font-bold text-teal-500">Tailwind is gonna be a lot of fun.</strong></p>

      <p class="mb-8">After using Bulma to build <a href="https://scotch.io" class="text-blue-500">Scotch.io</a>, my CSS files became littered with my own <code class="inline-block px-1 bg-gray-200 text-red-700 text-xs font-mono">!important</code>classes to override the framework's styles. Tailwind doesn't have the <code class="inline-block px-1 bg-gray-200 text-red-700 text-xs font-mono">!important</code>problem since all our elements are designed on the fly.</p>

      <p class="mb-12"><strong class="font-bold">Important Note:</strong> Tailwind lets us design quickly, but this doesn't mean that you don't need CSS knowledge however. To use Tailwind, you need to have a good understanding of CSS properties. In this course, <strong class="font-bold">we will learn Tailwind and we'll also learn CSS concepts</strong> to create good looking designs. <strong class="font-bold">Tailwind is the ultimate CSS shorthand</strong>, but we still need to learn the CSS, which we'll do in this course.</p>

      <p class="relative mb-8 text-3xl italic"><span class="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-purple-600 text-6xl scale-150 italic opacity-25">"</span>This isn't just a Tailwind course. This is also a "learn how to design with CSS" course</p>
      <p>The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go well together. We'll be writing a lot of Tailwind in this course so that the repetition will help us commit Tailwind classes to memory.</p>
    </div>

    <!-- right column -->
    <div class="flex-grow space-y-4 text-lg italic">
      <div class="bg-purple-800 p-10 rounded-lg text-purple-200">What classes should I use?</div>
      <div class="bg-purple-800 p-10 rounded-lg text-purple-200">How do I make things look good?</div>
      <div class="bg-purple-800 p-10 rounded-lg text-purple-200">My design looks basic?</div>
      <div class="bg-purple-800 p-10 rounded-lg text-purple-200">How do I do responsive?</div>
      <div class="bg-purple-800 p-10 rounded-lg text-purple-200">Why does my typography look so bad?</div>
    </div>

  </div>
  

</div>
```






left vid at: 06:12:53