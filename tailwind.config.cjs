/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"GT Alpina Standard"', "serif"],
        body: ["Satoshi", "sans-serif"],
      },
      colors: {
        darkBg: "#121212",
        darkSurface: "#1A1A1A",
        darkText: "#F2F2F2",
        darkMuted: "#ABABAB",
      },
    },
  },
  plugins: [],
};
