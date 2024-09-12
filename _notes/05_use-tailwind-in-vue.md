# Using Tailwind in a Vue notes
run NVM use 20 to use the correct node version

# 01. Setup
This is a dated approach, documentation recommends to use vite setup instead
- setup vue project cli
  - this is a visual interface to create a project
``` shell 05_tailwind-in-vue
npx @vue/cli ui
```
- we then create a new project in this folder and select `vue3` as template
- we then `serve` the folder to run the app 
- and then open the app

- but we can just cd into the project folder and run `npm run serve` instead

## installing dependencies
``` shell
npm i tailwindcss autoprefixer
```

## adding tailwind.config.jso
``` shell
npx tailwindcss init
```
- specified contents to affect
``` js tailwind.config.js
content: ['src/**/*.vue'],
```

left vid at: 08:51:34