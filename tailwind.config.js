/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      bg_primary: "#e6f3ff",
      bg_secondary:"#ffe5e5",
      br_primary: "#4456A4",
      br_secondary: "#DB0000",
      bt_primary: "#FF4500",
    }
  },
  plugins: [],
  corePlugins:{
    preflight:false,
  }
}