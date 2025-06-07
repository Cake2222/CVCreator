/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [],
} 