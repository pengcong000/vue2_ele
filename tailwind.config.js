/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  // important: "#tailwind",
  content: [
    "./src/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  plugins: [],
}

