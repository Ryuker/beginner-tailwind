# Beginner Tailwind Notes
- [video](https://youtu.be/wEM5NdJ-8HY?si=mt9VgE7809WIiEjJ)

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