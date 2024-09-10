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

## Layout Positioning
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
# 13. About Me section 
- added `about me` section
  - without following the tutorial
``` HTML
<div class="relative bg-gray-200 px-6">
  <div class="container mx-auto flex flex-col items-center space-y-6">
    <h2 class="text-3xl lg:text-5xl font-bold text-teal-700">A Tailwind Video I've Done</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla odio voluptates asperiores unde architecto veritatis dolore dolores ipsam, neque enim eius saepe ipsum soluta veniam delectus blanditiis. Reprehenderit, consequuntur?</p>

    <div class="flex flex-col justify-between rounded border-2 border-gray-700 lg:w-1/2">
      <p class="p-4 lg:p-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <iframe class="w-full rounded-b" height="400" src="https://www.youtube.com/embed/NRagrTU_v8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </div>

  </div>
</div>
``` 

- tweaked `about me` section to match tutorial (looked cleaner)
``` HTML
<div class="bg-gray-200 px-6 lg:pt-12 pb-24">
  <div class="container mx-auto flex flex-col">
    <h2 class="mb-3 mx-auto text-3xl lg:text-5xl font-bold text-teal-700">About Me</h2>
    <p class="mb-12 lg:text-xl leading-loose">Lorem ipsum dolor sit amet <a href="#" class="text-blue-500 hover:underline">consectetur</a> Aliquam officia dolorum similique fuga? Ipsum quibusdam veniam sunt ratione placeat quod, enim blanditiis id nostrum alias error accusamus nesciunt at ut? Laborum assumenda beatae eveniet voluptatem quam at animi, ipsum, excepturi atque non obcaecati autem cupiditate maxime, explicabo ipsam illum commodi laboriosam in! Repudiandae mollitia iste ipsum suscipit sequi molestiae, fugit laborum illo vitae ratione? Quos rem officia ullam suscipit quaerat esse saepe quibusdam et!</p>

    <!-- videos -->
    <div class="flex space-x-8 text-left">
      <!-- first video -->
      <div class=" bg-white rounded border-2 border-gray-700 w-1/2 shadow-xl">
        <p class="text-lg p-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <iframe class="w-full rounded-b-2" height="315" src="https://www.youtube.com/embed/NRagrTU_v8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>

      <!-- second video -->
      <div class="bg-white rounded border-2 border-gray-700 w-1/2 shadow-xl">
        <p class="text-lg p-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <iframe class="w-full rounded-b-2" height="315" src="https://www.youtube.com/embed/NRagrTU_v8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </div>
    

  </div>
</div>
```

## Responsive design of About Me section
```HTML
<!-- about me =============================-->
<div class="bg-gray-200 px-6 lg:pt-12 pb-24 lg:text-center">
  <div class="container mx-auto px-6 lg:px-0 flex flex-col">
    <h2 class="mb-3 mx-auto text-3xl lg:text-6xl font-bold text-teal-700">About Me</h2>
    <p class="mb-12 text-base lg:text-xl leading-loose">Lorem ipsum dolor sit amet <a href="#" class="text-blue-500 hover:underline">consectetur</a> Aliquam officia dolorum similique fuga? Ipsum quibusdam veniam sunt ratione placeat quod, enim blanditiis id nostrum alias error accusamus nesciunt at ut? Laborum assumenda beatae eveniet voluptatem quam at animi, ipsum, excepturi atque non obcaecati autem cupiditate maxime, explicabo ipsam illum commodi laboriosam in! Repudiandae mollitia iste ipsum suscipit sequi molestiae, fugit laborum illo vitae ratione? Quos rem officia ullam suscipit quaerat esse saepe quibusdam et!</p>

    <!-- videos -->
    <div class="lg:flex lg:space-x-8 text-left space-y-8 lg:space-y-0">
      <!-- first video -->
      <div class="lg:w-1/2 bg-white rounded border-2 border-gray-700 shadow-xl">
        <p class="text-lg p-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <iframe class="w-full rounded-b-2" height="315" src="https://www.youtube.com/embed/NRagrTU_v8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>

      <!-- second video -->
      <div class="lg:w-1/2 bg-white rounded border-2 border-gray-700 shadow-xl">
        <p class="text-lg p-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <iframe class="w-full rounded-b-2" height="315" src="https://www.youtube.com/embed/NRagrTU_v8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </div>
  </div>
</div>
```

# 14. What you'll learn in this course section
## Own version
- added wrapping div with nested container
- added heading into container
``` HTML
<div class="py-32 bg-gray-200 text-gray-700">
      <div class="container mx-auto px-6 lg:px-0">
        <!-- header -->
        <h2 class="mb-20 text-6xl font-bold text-gray-800 text-center">What you'll learn in this course</h2>
        
        <!-- Learnings -->
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          lessons
        </div>
    </div>

  </div>
</div>
```
- Added 'learnings' div
  - fairly simple, the circles were the most complex
``` HTML
<div class="rounded-lg border-2 border-gray-700 bg-transparent">
  <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
    <h3>How to use Tailwind classes</h3>
    <!-- circle decorations -->
    <div class="flex items-center gap-2">
      <div class="rounded-full w-3 h-3 bg-red-500"></div>
      <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
      <div class="rounded-full w-3 h-3 bg-green-500"></div>
    </div>
  </div>
  <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate expedita aliquid, optio ut assumenda! Expedita non eligendi amet, labore praesentium nemo mollitia itaque, nobis repellat facilis iure, veniam molestias!</p>
</div>
```

- modified grid cols to 6 on the learnings wrapper | | `lg:grid-cols-6`
  - so we can half it on the learning elements | `col-span-2` | `col-span-3`

- modified learnings section with all the proper text
  - had to add a div to wrap the paragraph elements in a few
  - specified grid should only be used at lg: and up

``` HTML
<div class="py-32 bg-gray-200 text-gray-700">
      <div class="container mx-auto px-6 lg:px-0">
        <!-- header -->
        <h2 class="mb-20 text-6xl font-bold text-gray-800 text-center">What you'll learn in this course</h2>
        
        <!-- Learnings -->
        <div class="w-full lg:grid lg:grid-cols-6 gap-10 space-y-6 lg:space-y-0">

          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>How to use Tailwind classes</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">We'll dive into the most important Tailwind classes and use them a TON. There are a lot of useful classes like spacing, backgrounds, borders, shadows, and typography. We'll type the Tailwind classes many times over to ensure that repeitition is our greatest learning tool.</p>
          </div>
          
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Make good looking designs</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">There's a certain process to designing with Tailwind that we'll take to make our designs look good. Some easy to remember rules are all it takes to get a good design. We'll also talk about ideas and action items to take a good design and make it great.</p>
          </div>
          
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Why Tailwind is different/better</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">To be completely honest, I didn't like Tailwind at first. It felt like inline styles to me (and maybe still does). After using it more and more though, I've come to absolutely love it. I dread jumping into a project without Tailwind now.</p>
          </div>
          
          <!-- 2nd row  -->
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-3">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>How to build this site (site-ception!)</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">The site you're on (BeginnerTailwind.com) is built with Tailwind and has 0 custom css.</p>
            <p class="p-4">You can take all of the code from this site and use it for your own landing pages or sites! All the code is available to you with course purchase.</p>
          </div>
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-3">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>A fun and methodical design process</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">I struggle with making things look good and don't consider myself a designer. What I try to do is have a formula for making things look good. I focus on design in this order: spacing, box properties, typography, fun element to pop. We'll talk about this all throughout the course.</p>
          </div>

          <!-- 3rd row -->
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Creating common components</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <div class="p-4 space-y-5">
              <p>One of the first things we want to do when using Tailwind is to create components like cards, buttons, and forms. We'll build these out and see how Tailwind compares to CSS frameworks like Bootstrap.</p>
              <p>We'll also build out navigation, hero, pricing, newsletter, and footer components in this  course.</p>
            </div>
          </div>

          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Shrinking bundle sizes</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <div class="p-4 space-y-5">
              <p>Tailwind comes with so many classes. It doesn't make sense to send all of those to our users' browsers. With PostCSS and PurgeCSS, we can shrink the amount of CSS we send to our users.</p>
              <p>We'll learn how to only send the classes that we actually use so that our bundle sizes can drop to even below 10kb!</p>
            </div>
            
          </div>

          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Using Tailwind w/ React</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <div class="p-4 space-y-5">
              <p>Tailwind's benefits really shine when you pair it with a JavaScript library/framework. Extracting classes into components is the recommended way to keep Tailwind DRY (don't repeat yourself).</p>
              <p>While we could use the @apply() or theme() functions, it forgoes some of the benefits of Tailwind. Namely we are once again creating a custom class and CSS.</p>
            </div>
          </div>
          
          <!-- 4th row -->
          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>How to customize Tailwind</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">Tailwind is easily configurable for our own projects using the tailwind.js config file. We'll explore changing out fonts, colors, sizes, and more so that our Tailwind setups are custom and tailored to our projects.</p>
          </div>

          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Using Tailwind in VS Code</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">VS Code is my favorite editor and Tailwind works fantastically in it. There are some essential plugins and setup for using Tailwind in VS Code. We'll go over each and use VS Code heavily in this course.</p>
          </div>

          <div class="rounded-lg border-2 border-gray-700 bg-transparent col-span-2">
            <div class="w-full flex justify-between p-4 border-b-2 border-gray-700 text-lg font-bold">
              <h3>Extending Tailwind</h3>
              <!-- circle decorations -->
              <div class="flex items-center gap-2">
                <div class="rounded-full w-3 h-3 bg-red-500"></div>
                <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
            </div>
            <p class="p-4">Learning Tailwind is just the beginning. There are some great tools like Tailwind Typography, Tailwind UI, Tailwind Builder, and more. We'll talk about some ways to extend Tailwind and ways we can go further.</p>
          </div>   
        </div>
      </div>
    </div>
```

## Tutorial corrections
- changed the elements to have a `shadow-lg`

- header fun elements
  - added gradient lines using absolute positioning
``` HTML
<!-- section header -->
<div class="relative">
  <h2 class="mb-32 text-6xl font-bold text-purple-800 text-center">What you'll learn in this course</h2>
  <div class="absolute left-0 top-0 h-2 w-1/3 rounded bg-gradient-to-r from-blue-400 to-purple-600 transform -translate-y-4"></div>
  <div class="absolute right-0 bottom-0 h-2 w-1/3 rounded bg-gradient-to-r from-purple-600 to-blue-400 transform translate-y-4"></div>
</div> 
```

- `learnings` style differences
  - wrapping div is a bit different
``` HTML
<div class="flex justify-between items-center p-4 border-b-2 border-gray-700 text-lg font-bold">
```  
  - changed circle decorations wrapper to use `space-x-2` instead 
``` HTML
<div class="flex space-x-2">
```

## Responsive tweaks
- only added responsiveness to the header text size 


# 15. What we'll build in this course' section

## My version
- coded my version (probably deviates a bit)
``` HTML
 <div class="py-32 bg-gray-200">
  <div class="container mx-auto">
    
    <!-- heading -->
    <div class="text-center space-y-4 mb-4 text-gray-800">
      <h2 class="text-4xl">What we'll build in this course</h2>
      <p>These components are things you'll have to create in every project</p>
    </div>

    <!-- components -->
    <div class="grid grid-cols-4 gap-4">
      <!-- component -->
      <div class="bg-gray-50 flex items-center rounded shadow-md">
        <div class="w-1/3 flex justify-center bg-red-500 py-2 rounded-l text-3xl">😍</div>
        <div class="pl-3 text-gray-800">Buttons</div>
      </div>
    </div>

  </div>
</div>
```

## Tutorial corrections
- corrected some padding and margin differences
``` HTML
<div class="py-24 bg-gray-200">
  <div class="container mx-auto px-6 lg:px-0">
```
- heading corrections
``` HTML
<!-- heading -->
<div class="text-center mb-8 text-gray-800">
  <h2 class="mb-2 text-4xl">What We'll Build</h2>
  <p class="text-lg">These components are things you'll have to create in every project</p>
</div>
```

- component div corrections
  - kept a few things in my version since that words fine as well
``` HTML
 <!-- components -->
<div class="grid grid-cols-4 gap-5">
  <!-- component -->
  <div class="bg-gray-50 flex items-center rounded shadow-md">
    <div class="w-1/3 flex justify-center bg-red-500 py-2 rounded-l text-3xl">😍</div>
    <div class="px-4 text-gray-800">Buttons</div>
  </div>
</div>
```

## Responsive tweaks
- only thing changes is the grid cols get responsive breakpoints
``` HTML
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```
- made some small tweaks to the heading as well
``` HTML
<!-- heading -->
<div class="text-center mb-8 text-gray-800">
  <h2 class="mb-2 text-4xl">What We'll Build</h2>
  <p class="px-20 sm:px-0 text-lg">These components are things you'll have to create in every project</p>
</div>
```

# 16. Pricing section

## My version
- added my version HTML skeleton
``` HTML
<div class="py-24 bg-blue-600">
      <div class="container mx-auto flex justify-center max-w-7xl px-8 lg:px-0 space-x-8">

      <!-- left section -->
      <div>
        <p>75 videos at a smooth pace</p>
        <p>9.25 hours of learning + building</p>
        <p>Source code and CodePens</p>
      </div>
      
      <!-- middle section -->
      <div class="bg-white border-8 border-purple-700 rounded">
        <span>Start Tailwind-ing!</span>
        <span>$45</span>
        <a href="#">Buy this Course <strong></strong>GUMROAD</a>
      </div>

      <!-- right section -->
      <div>
        <p>Use the code in your projects</p>
        <p>Access to Discord for support</p>
        <p>Lifetime refund guarantee</p>
      </div>
    </div>
    
  </div>
</div>
```
- styled middle section
``` HTML
<!-- middle section -->
<div class="flex flex-col items-center py-8 px-8 space-y-6 bg-white border-8 border-purple-700 rounded">
  <span class="text-gray-700 text-lg">Start Tailwind-ing!</span>
  <span class="text-gray-600 text-6xl">$45</span>
  <a href="#" class="bg-black py-2 px-12 text-gray-100 rounded">Buy this Course <strong class="font-bold">GUMROAD</strong></a>
</div>
```

- Styled left and right section
``` HTML
<!-- left section -->
<div class="w-1/3 flex flex-col justify-center text-center text-2xl leading-loose text-blue-200">
  <div>
    <strong class="font-bold text-white">75 videos</strong> at a smooth pace
  </div>
  <div>
    <strong class="font-bold text-white">9.25 hours</strong> of learning + building
  </div>
  <div>
    <strong class="font-bold text-white">Source code</strong> and CodePens
  </div>
</div>

<!-- right section -->
<div class="w-1/3 flex flex-col justify-center text-center text-2xl leading-loose text-blue-200">
  <div>Use the code in 
    <strong class="font-bold text-white">your projects</strong>
  </div>
  <div>Access to <strong class="font-bold text-white">Discord</strong> for support</div>
  <div>Lifetime <strong class="font-bold text-white">refund guarantee</strong></div>
</div>
```

- added absolute gray div to break up the page layout
- added some hover behaviour

## Tutorial corrections
- there's various differences that I don't find that I didn't feel necessary to adapt the code to.
- added `block` to the button to have it take up the full element
- some corrections to the price element
  - gave it a purple color and made text bold
  - wrapped dollar sign into a span class
  - added a transform on hover state to scale the while pricing wrapper element with a duration
``` HTML
<div class="w-1/3 flex flex-col items-center py-8 px-8 space-y-6 bg-white border-8 border-purple-700 rounded hover:transform hover:scale-105 transition duration-500">
            <h4 class="text-gray-700 text-lg">Start Tailwind<span class="italic">-ing</span>!</h4>
            <div class="text-purple-800 text-6xl font-bold">
              <span class="font-bold opacity-50">$</span>45
            </div>
            <a href="#" class="block bg-purple-600 hover:bg-pink-400 py-2 px-12 text-gray-100 rounded drop-shadow-lg">Buy this Course</a>
          </div>
```

- added decoration to pricing element
  - 3 beams shooting out with different colors
  - required absolute positioning so the parent element is positioned relative
  - modified parent to use text center instead of flex
``` HTML
<!-- showoff beam thing -->
<div class="absolute top-0 inset-x-0 transform -translate-y-full flex justify-center space-x-8 items-end">
  <div class="w-2 h-16 mb-8 bg-red-500 rounded transform -rotate-45 origin-bottom"></div>
  <div class="w-2 h-24 mb-8 bg-yellow-500 rounded origin-bottom"></div>
  <div class="w-2 h-16 mb-8 bg-green-500 rounded transform rotate-45 origin-bottom"></div>
</div>
```

## Responsive support
- mostly modified to reorder the elements on mobile
  - also added some width responsiveness
``` HTML
<div class="relative container mx-auto flex flex-col items-center lg:flex-row lg:justify-center max-w-7xl px-8 lg:px-0 space-x-0 lg:space-x-8">

  <!-- left section -->
  <div class="lg:w-1/3 order-2 lg:order-1 pt-16 flex flex-col justify-center text-center text-2xl leading-loose text-blue-200">
    <!-- content -->
  </div>
  
  <!-- middle section -->
  <div class="relative order-1 lg:order-2 w-full sm:w-1/2 lg:w-1/3 text-center py-8 px-8 space-y-6 bg-white border-8 border-purple-700 rounded hover:transform hover:scale-105 transition duration-500">
    <!-- content -->
  </div>

  <!-- right section -->
  <div class="order-3 lg:w-1/3 pt-16 flex flex-col justify-center text-center text-2xl leading-loose text-blue-200">
    <!-- content -->
</div>
```

# 17. FAQ section
## My version
- styled the faq item since this is the most complex of the design
``` HTML
<div class="p-8 rounded-lg border-2 border-gray-500 space-y-4">
  <h3 class="text-xl text-gray-200">Do I need to know CSS?</h3>
  <p>This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.</p>
</div>
```

- rest of the layout styling
``` HTML
<div class="pt-16 pb-32 bg-gray-800 text-gray-400">
  <div class="container mx-auto flex flex-col items-center">
    <h2 class="text-center mb-12 text-3xl">Frequently Asked Questions</h2>
    <!-- grid faq wrapper -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 max-w-6xl">
    </div>
  </div>
</div> 
```

## Tutorial corrections
- modified padding of main div to `py-32`
- modified heading to use `font-bold`
- moved grid padding into the container div | `px-6`
- didn't care about the rest of the differences

``` HTML
<div class="py-32 bg-gray-800 text-gray-400">
  <div class="container mx-auto px-6 md:px-0 flex flex-col items-center">
    <h2 class="text-center mb-12 text-3xl font-bold">Frequently Asked Questions</h2>
    <!-- grid faq wrapper -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
      <!-- grid items -->
  </div>
</div>
```

# 18. Footer
## My version
- added html skeleton
``` HTML
<div class="py-32 bg-gradient-to-br from-purple-100 to-gray-200">
  <div class="relative">
    <div class="container">
      <div>
        <!-- newsletter -->
        <div>
          <h2>Get updates on this course</h2>
          <form type="submit">
            <input type="text" placeholder="super@secret.com"/>
            <button>Subscribe</button>
          </form>
        </div>
        <!-- site map  -->
        <div >
          <div>
            <h2>Company</h2>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h2>Product</h2>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
            <a href="#">Guides</a>
          </div>
          <div class="flex-grow">
            <h2>Legal Stuff</h2>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Rules</a>
          </div>
        </div>
      </div>
      <!-- copyright -->
      <div>
        <div>
          <span>Copyright © 2024 <a href="https://joerivanees.com">Joeri van Ees</a></span>
        </div>
        <div>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  </div>
```


left vid at: 07:49:46