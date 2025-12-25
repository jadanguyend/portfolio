// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",  // px-6 mobile
        md: "3rem",       // px-10 medium and above
      },
      // override default max-widths to allow full stretch
      screens: {
        sm: "100%", 
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
    },
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
