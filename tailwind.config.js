/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "875px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}