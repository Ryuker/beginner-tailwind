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

## Importing tailwind into the website
- added import to `main.js`
- made sure main.js is loaded into the `index.html`
``` js main.js
import 'tailwindcss/tailwind.css';
```

# 02. Styling the body