# Tailwind Website Components Notes

# 01. Card

## Card w/no Image
- added card with no image
  - wrote it without following the tutorial first
``` HTML
<div class="p-20 bg-teal-50">
  <div class="mb-4 text-sky-400 font-bold text-sm">1. Card w/no image</div>
  <div class="p-5 bg-white shadow-lg space-y-2">
    <h1 class="font-bold text-xl">Card with No Image</h1>
    <p>This is my cool new card</p>
  </div>
</div>
```

## Card w/ Image
- Added card with image
  - without following the tutorial
``` HTML
<div class="p-20 bg-purple-50">
  <div class="mb-4 text-sky-400 font-bold text-sm">2. Card w/ image</div>
  <div class="size-1/2 p-5 bg-white shadow-lg space-y-2">
    <img src="" alt="card-image">
    <h1 class="font-bold text-xl">Card with Image</h1>
    <p class="mb-2">This is my cool new card!</p>
    <div>
      <a href="/" class="text-sky-400 hover:text-sky-300 font-bold ">Read More</a>
      <i>icon</i>
    </div>
  </div>
</div>
``` 

## Horizontal Card
- Added Horizontal Card
  - without following the tutorial
``` HTML
<div class="p-20 bg-yellow-50">
  <div class="mb-4 text-yellow-400 font-bold text-sm">3. Horizontal Card</div>
  <div class="p-5 bg-white shadow-lg space-y-2 flex items-stretch">
    <img src="" alt="card-image" class="size-1/3">
    <div class="flex flex-col justify-center">
      <h1 class="font-bold text-xl">Horizontal Card</h1>
      <p class="mb-2">This is my cool new card!</p>
    </div>
  </div>
</div>
```