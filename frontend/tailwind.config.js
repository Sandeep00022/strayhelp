const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}",flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [flowbite.content(),],
};