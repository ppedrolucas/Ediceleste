/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mineTitã: "#ffffff1a",
        mineTitãDark: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
