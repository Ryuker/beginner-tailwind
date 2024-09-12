# Tailwind Typography Notes
- uses node 20, run `nvm use 20` for the right version
# 00. Setup
- copied over project files from 'customizing-tw' and made sure the project ran
- cleaned out tailwind.config.js with class additions since we don't need them

# 01. Plugin setup

- [Plugin Page](https://tailwindcss.com/docs/plugins#typography)
- this is a really usefull plugin because it reduces the need to add classes ourselves to p tags etc.

## To Install
``` shell
npm install -D @tailwindcss/typography
```

## To Use
- added it as a plugin
``` JS tailwind.config.js
plugins: [ require('@tailwindcss/typography'),],
```

# 02. Styling a Typography section
- this is very usefull for blogposts and other content coming in from a cms
- we have a div with
  - we specify prose and we can do this responsive as well
    - this way we get dynamic larger text and small text based on screen size
``` HTML
<div class="mt-8 prose lg:prose-xl prose-slate mx-auto">
  <!-- content -->
</div>
```
- the content inside this is just p element etc, there's not styling on them
  - but the plugin styles it for us.





left vid at: 09:04:33