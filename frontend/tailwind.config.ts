import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1A33",
          50: "#EEF2F8",
          100: "#D6E0EE",
          200: "#AEC1DD",
          300: "#7F9BC4",
          400: "#4E6D9E",
          500: "#2D4A78",
          600: "#1C355C",
          700: "#132646",
          800: "#0B1A33",
          900: "#060F1E",
        },
        brand: {
          red: "#E31B23",
          "red-dark": "#B8141B",
          "red-light": "#FF4B52",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(11, 26, 51, 0.12)",
        "card-hover": "0 12px 32px -8px rgba(11, 26, 51, 0.22)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
