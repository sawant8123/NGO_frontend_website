/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ important for Tailwind to scan your files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
