/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0c0c80', // your chosen dark blue shade
        'secondary': '#0a192f'
      },
    },
  },
  plugins: [],
}