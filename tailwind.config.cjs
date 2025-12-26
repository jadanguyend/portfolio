// tailwind.config.js
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

        /* ---------------- LIGHT MODE GRAYS ---------------- */
        grayLight: {
          50: "#FAFAFA",
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#CFCFCF",
          400: "#A8A8A8",
          500: "#8C8C8C",
          600: "#6E6E6E",
          700: "#4F4F4F",
          800: "#333333",
          900: "#1A1A1A",
        },

        /* ---------------- DARK MODE GRAYS ---------------- */
        grayDark: {
          50: "#1A1A1A",
          100: "#2C2C2C",
          200: "#3D3D3D",
          300: "#555555",
          400: "#707070",
          500: "#8A8A8A",
          600: "#A5A5A5",
          700: "#C0C0C0",
          800: "#DADADA",
          900: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};
