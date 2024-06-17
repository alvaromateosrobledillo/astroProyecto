/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBackground: "#ffffff",
        darkBackground: "#1a202c",
        lightText: "#000000",
        darkText: "#ffffff",
        lightBorder: "#e2e8f0",
        darkBorder: "#4a5568",
        accent: "#d97706" /* Amber-500 */,
      },
    },
  },
  plugins: [],
};
