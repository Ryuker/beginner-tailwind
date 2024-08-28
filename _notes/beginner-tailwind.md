# Beginner Tailwind Notes
- [video](https://youtu.be/wEM5NdJ-8HY?si=mt9VgE7809WIiEjJ)

emmet shorthands:
- `div.flex` to add div + class
- `div*5` to repeat the same div
- `div+div` to add 2 divs under each other
- `div{Click Me}` to add contents inside the div directly
- `div#name` to add div with an id of name

# 01. Setup
- added Tailwind Template HTML using a cdn import
``` HTML 01-tailwind-template
<script src="https://cdn.tailwindcss.com"></script>
```

# 02. Tailwind Introduction
- added Tailwind Intro component
``` HTML
<div class="">
  <img 
    class="" 
    src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
    alt="avatar" 
    width="130" heigh="130" />
  <div class="">
    <h2 class="">Erin Lindford</h2>
    <div class="">Product Engineer</div>
    <div class="">erinlindford@example.com</div>
    <div class="">(555) 765-4321</div>
  </div>
</div>
```

- added tailwind classes
``` HTML
<div class="flex items-center m-20 border border-gray-100 rounded shadow p-3">
  <img 
    class="rounded mr-4" 
    src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
    alt="avatar" 
    width="130" heigh="130" />
  <div class="text-gray-700">
    <h2 class="font-bold text-2xl text-gray-900">Erin Lindford</h2>
    <div class="text-sm">Product Engineer</div>
    <div class="text-sm">erinlindford@example.com</div>
    <div class="text-sm">(555) 765-4321</div>
  </div>
</div>
```

# 03. Tailwind Basics
- created tailwind-basics index.html file
- specified in comments which sections we'll be building to explore the core concepts

## Spacing: White Space
- to specify margin: `m-0` | to specify direction of margin: `mt-3` | [docs](https://tailwindcss.com/docs/margin)
- rule of thumb with buttons is to double the value of the y axis on the x axis
  eg: `py-2 px-4`
example:
``` HTML
<!-- spacing -->
<div class="p-20">
  <h2 class="mb-4">Spacing Section</h2>
  <p class="mb-4">Tailwind helps us space things out with margin and padding.</p>

  <button class="mr-3 py-2 px-4">Learn More</button>
  <button class="py-2 px-8">Sign Up</button>
</div>
```

## Box Properties

### Background properties
- exploring bg-color property | [bg-color](https://tailwindcss.com/docs/background-color)
  - Tailwind has good looking colors out of the box 
  - the coloring scheme uses numbers | `bg-slate-100 for example.
    - on the docs you can see the changes in the color per value
  - the coloring schema also works for borders etc.

### Border properties
- explored border radius | `rounded-full` | [rounded-full](https://tailwindcss.com/docs/border-radius)
- colors work the same as `bg` | `border-red-800` | [border-red-8000](https://tailwindcss.com/docs/border-color)
- for border sizes an increment of 2 is used | `border-2` [border-2](https://tailwindcss.com/docs/border-width)

### Shadow properties
- explored box-shadow | `shadow-lg` | [shadow-lg](https://tailwindcss.com/docs/box-shadow)

### Sizing and Numbering
- explored spacing | [spacing customization](https://tailwindcss.com/docs/customizing-spacing)
  - good way to keep in mind what spacing your going to get is to multiple the number by 4. 
    - the result is rougly the pixel spacing you'll get 

### Typography
- styling cascades down to the child components
- `tracking-wide` modifies the letter spacing | [tracking-wide](https://tailwindcss.com/docs/letter-spacing)

### Colors
- explored default color palette | [default-color-palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette)

- the default colors are pretty good
  - we can change the base color and then tailwind generates the 9 shades

- couple of best practise |` bg-red-100 text-red-900 `
  - take color contrast into account (if there's not clear design)
  - if you're at 100 might want to use a large number like 800 for the text.
  - best to play around

 ## utility classes
 - we can use `space-y-3` on the parent div to space out the children.
  - this is utility class of tailwind, this way margin doesn't have to be specified on the child elements. 

 ## pseudo classes
 [pseudo-classes](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements)
 - to use a pseudo classes you can just use `hover:bg-blue` for example
   | so you specify the pseudeclass and then use the utility class 

## Transitions
- transition: `transition duration-300` | [transition](https://tailwindcss.com/docs/transition-property)
  - transition timing function `ease-in` | [transition timing](https://tailwindcss.com/docs/transition-timing-function)
  - basic easing classes

## Transforms
- using translate to move the element | `hover:translate-x-4` | 
  [translate](https://tailwindcss.com/docs/translate)
- using rotate | `hover:rotate-45` |
  [rotate](https://tailwindcss.com/docs/rotate)
 

## Animations
- `animate-bounce` | `animate-ping` | `animate-pulse` | `animate-ping`
  - these can all be used to add some simple animations to the element


# 04. Background Gradients
- For grandients we need to:
  1. set a class for the gradient
  `bg-gradient-to-br`
  2. set a starting color
  `from-blue-100`
  3. set a end color
  `to-purple-200`
  4. set a middle color (optional)
  `via-red-400`

- text gradient
`bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800`

# 05. Layout and Positioning
## Container
- container class | [container](https://tailwindcss.com/docs/container)
- center positioning using margin auto `container mx-auto`
example usage:
``` HTML
<div class="py-20 min-h-screen bg-gray-200">
  <div class="container mx-auto border border-red-400">
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ab corporis corrupti cumque natus laborum mollitia ex doloribus porro. Consectetur expedita minima porro ea quod iusto saepe ratione modi laudantium.</p>
    </div>
  </div>
</div>
```

## Position
- absolute positioning:
  - an absolute positioned item with position it self to the first relative parent.
  - if there's no relative parent element then it positions itself to the body
example:
``` HTML
<div class="relative bg-white p-10 rounded-lg shadow-lg">
  <!-- Absolutely positioned label -->
  <div class="absolute top-0 right-0">Brand New</div>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ab corporis corrupti cumque natus laborum mollitia ex doloribus porro. Consectetur expedita minima porro ea quod iusto saepe ratione modi laudantium.</p>
</div>
```
- some more tweaks to make absolute positioning look good
  - positions it slight off the parent element with padding and colors
``` HTML
<div class="absolute top-0 right-0 bg-red-500 rounded xs py-1 px-4 transform translate-x-2 -translate-y-2 text-red-100">Brand New</div>
```

# 06. Responsive design
- Tailwind's responsive classes are mobile first
- to use: `md:w-32` or `lg:bg-red-200` for example
example usage:
``` HTML
<h2 class="text-6xl text-black md:text-red-600 lg:text-yellow-600 xl:text-white">Mobile First</h2>
```



left vid at: 01:53:28