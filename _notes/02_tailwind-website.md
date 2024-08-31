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
**tutorial version**:
``` HTML
<div class="p-20 bg-blue-50">
  <h3 class="mb-4 text-sky-400 font-bold text-sm">1. Card w/ no image</h3>
  <div class="bg-white p-6 rounded-lg shadow-lg space-y-2">
    <h2 class="font-bold text-2xl text-gray-800">Card with No Image</h2>
    <p class="text-gray-700">This is my cool new card!</p>
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
**Tutorial Version**:
``` HTML
<div class="p-20 bg-purple-50">
  <div class="mb-4 text-purple-500 font-bold text-sm">2. Card w/ image</div>
  <div class="w-full md:w-1/2 bg-white rounded-lg shadow-lg">
    <img src="https://images.unsplash.com/photo-1515581247767-d78687bf2254?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desert" class="rounded-t-lg"/>
    <div class="p-6">
      <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with Image</h2>
      <p class="mb-2 text-purple-700 mb-2">This is a little better of a card!</p>
      <a href="#" class="text-purple-600 underline hover:text-purple-500 font-bold text-sm">Read More 👉</a>
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
**Tutorial Version**:
``` HTML
<div class="p-20 bg-orange-50">
  <h3 class="mb-4 text-orange-600 font-bold text-sm">3. Horizontal Card</h3>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1563985336376-568060942b80?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coast" class="md:w-1/3 rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
    <div class="p-6 flex flex-col justify-center">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">Horizontal Card</h2>
      <p class="mb-2 text-orange-700">Look at me go sideways!</p>
    </div>
  </div>
</div>
```


# 02. Buttons
- added my own version of the buttons
  - didn't quite get the design to match
- added tutorial version on the buttons

# 03. Forms
## Name and Twitter Form
- wrote the form following the tutorial
  - fairly simple to follow along with.
``` HTML
<div class="bg-blue-200 min-h-screen py-32 px-10">
    <div class="bg-white p-10 rounded-lg shadow w-full md:w-3/4 lg:w-1/2 mx-auto">
      <form action="">
        <div class="mb-5">
          <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
          <input type="text" id="name" placeholder="John Doe" class="border border-gray-300 shadow p-3 w-full rounded">
        </div>

        <div class="mb-10">
          <label for="twitter" class="block mb-2 font-bold text-gray-600">Twitter</label>
          <input type="text" id="twitter" placeholder="@johndoe" class="border border-gray-300 shadow p-3 w-full rounded border-red-300">
          <p class="text-sm text-red-400 mt-2">Twitter username is required</p>
        </div>

        <button class="block w-full bg-blue-500 hover:bg-blue-400 text-white font-bold p-4 rounded-lg">Submit</button>
      </form>
    </div>
  </div>
```

left vid at: 03:40:59