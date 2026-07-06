/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Be Vietnam Pro'", 'Inter', 'sans-serif'],
        body: ["'Be Vietnam Pro'", 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
