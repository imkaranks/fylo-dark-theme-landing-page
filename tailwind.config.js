/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          700: "hsl(216, 53%, 9%)",
          600: "hsl(218, 28%, 13%)",
          500: "hsl(217, 28%, 15%)",
          400: "hsl(219, 30%, 18%)"
        },
        "accent": {
          "cyan": "hsl(176, 68%, 64%)",
          "blue": "hsl(198, 60%, 50%)",
          "red": "hsl(0, 100%, 63%)"
        }
      },
      fontFamily: {
        "primary": ['Open Sans', 'sans-serif'],
        "accent": ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

