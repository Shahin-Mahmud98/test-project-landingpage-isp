/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    customBlue: '#1e3a8a', // Example custom color
  },
  height: {
    'custom': '400px', // Example custom height
  },
// eslint-disable-next-line no-undef
plugins: [require('daisyui')],
daisyui:{
  themes:["blue"],
}
}

