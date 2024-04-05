/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "display": ["DM Serif Display", "serif"]
      },

      colors: {
        golden: "#C69749",
        table: "#282A3A"
      }
    },
  },
  plugins: [],
};
