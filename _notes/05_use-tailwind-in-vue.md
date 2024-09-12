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

## adding tailwind.config.js
``` shell
npx tailwindcss init
```
- specified contents to affect
``` js tailwind.config.js
content: ['src/**/*.vue'],
```

## adding postscss.config.js
- added `postcss.config.js` to the root
``` JS postcss.config.js
module.exports = {
  plugins: [
    //...
    require('tailwindcss'), 
    require('autoprefixer'), 
    //...
  ]
}
```

## addding tailwind imports
- added `src/assets/styles/index.css`
``` CSS index.css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

## import css into main.js
- in main.js added import
``` JS main.js
import './assets/styles/index.css';
```

## cleaned out app.vue to a clean slate

# 02. Exploring Tailwind in Vue

- then we run the server and notice Tailwind is not influencing the styles



left vid at: 08:51:34