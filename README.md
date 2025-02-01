# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

This is an assignment project given by Testline

The Technology used in this project are -
ReactJs
TailwindCss
DaisyUI
Lucide-React

First I initialize the React Project using - npm create vite@latest .

then installed TailwindCss 3 using - npm install -D tailwindcss@3 postcss autoprefixer - npx tailwindcss init

then added these in the index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

but in my project this didnot worked so i added these

    @import "tailwindcss/base";

    @import "tailwindcss/components";

    @import "tailwindcss/utilities";

then installed DaisyUI for UI components - npm i -D daisyui@latest

then added the daisy UI in the tailwind.config file by folowing the installation doc in the daisyUI

then installed Lucide-React using - npm install lucide-react

this library is for the icons

then - npm install - npm run dev

---

Then added the following in the vite.config.js file to bypass the CORS by setting up a proxy server
server: {
    proxy: {
        '/api': {
            target: 'https://api.jsonserve.com/Uw5CrX',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ''),
        },
    },
},

like this in the screen shot

now we just have to call for '/api' using the axios or fetch for the jsonlink
