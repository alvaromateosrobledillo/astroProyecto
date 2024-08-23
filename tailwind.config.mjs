import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBackground: "#f8fafc",
        darkBackground: "#1a202c",
        lightText: "#2d3748",
        darkText: "#f7fafc",
        lightBorder: "#e2e8f0",
        darkBorder: "#4a5568",
        accent: "#ff7e5f",
        secondary: "#2b6cb0",
        highlight: "#68d391",
        danger: "#e53e3e",
        muted: "#718096",
        gradientFrom: "#ff7e5f",
        gradientTo: "#feb47b",
      },
      fontFamily: {
        sans: ['"Onest Variable"', "system-ui", "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem",
      },
    },
  },
  plugins: [forms, typography, aspectRatio], // forms plugin re-added
};
