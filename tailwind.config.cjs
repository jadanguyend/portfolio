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
        heading: ["SF Pro Text", "sans-serif"],
        body: ["SF Pro Text", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "var(--accent-color)",
          2: "var(--accent-color-2)",
          soft: "var(--accent-soft)",
        },

        /* ---------------- LIGHT MODE GRAYS ---------------- */
        grayLight: {
          0: "#FFFFFF",
          10: "#FDFDFD",
          50: "#F8F8F8",
          100: "#F4F4F4",
          200: "#ECECEC",
          300: "#D8D8D8",
          400: "#B5B5B5",
          500: "#8C8C8C",
          600: "#6E6E6E",
          700: "#4F4F4F",
          800: "#333333",
          900: "#050505",
        },

        grayDark: {
          0: "#000000",
          10: "#050505",
          50: "#181818",
          100: "#242424",
          200: "#323232",
          300: "#4A4A4A",
          400: "#686868",
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
