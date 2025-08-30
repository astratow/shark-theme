/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './frontend/**/*.{html,js,liquid}',
    './assets/**/*.{js,css,liquid}',
    './snippets/**/*.{liquid}',     
    './sections/**/*.{liquid}',     
    './templates/**/*.{liquid}',    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}