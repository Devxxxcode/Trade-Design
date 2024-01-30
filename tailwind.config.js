const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customOrange:"#fd6a4f",
        customDark:"#3f3453",
        textColor:"#717070",
        textMuted:"#999",
        customYellow:"#d77600",
        deepBlue:"#030912",
        lightBlue:"#050d1a",
      },
    },
  },
  plugins: [],
})

