/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["bumblebee", "light", "cmyk"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
