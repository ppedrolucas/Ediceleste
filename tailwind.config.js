/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#ffffff1a",
        sidebarDark: "#0000000d",
      },
    },
  },
  plugins: [],
};
