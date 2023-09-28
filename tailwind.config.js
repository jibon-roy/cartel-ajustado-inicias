/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        nextbold: ["AvenirNextLTPro-Bold", "sans-serif"],
        nextdemi: ["AvenirNextLTPro-Demi", "sans-serif"],
        nextheavy: ["AvenirNextLTPro-HeavyCn", "sans-serif"],
        nextregular: ["AvenirNextLTPro-Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
}

