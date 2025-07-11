/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      scroll: 'scroll 40s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
      colors: {
        ecoOrange: '#ff7900',
        ecoGreen: '#073b1a',
        ecoYellow: '#ffb300',
  },
    },
  },
  plugins: [],
}
