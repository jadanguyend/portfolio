/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"GT Alpina Standard"', 'serif'],
        body: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
