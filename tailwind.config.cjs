module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
      },
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
        body: ["SF Pro Text", "sans-serif"],
        sfmono: ['"Messina Sans Mono"', "monospace"],
      },
      colors: {
        accent: "var(--accent-color)",
        accent2: "var(--accent-color-2)",

        /* Grayscale unified for background, text, border */
        gray: {
          0: "#FFFFFF",     // background 0
          50: "#FAFAFA",    // background 50
          100: "#F2F2F2",   // background 100
          300: "#BDBDBD",   
          400: "#A3A3A3",
          500: "#8C8C8C",
          600: "#737373",
          700: "#4D4D4D",   // neutral 700
          800: "#2A2A2A",   // neutral 800
          light: "#EDEDED", // border light
          dark: "#D6D6D6",  // border dark
          text: "#1F1F1F",  // primary text
        },

        darkBg: "#151515",
        darkSurface: "#1A1A1A",
        darkText: "#F2F2F2",
        darkMuted: "#ABABAB",
      },
    },
  },
  plugins: [],
};
