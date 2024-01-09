/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        'extra': 300,
        'extra2': 600,
        'extra3': 500,
      },
    },
  },
  plugins: [],
}

