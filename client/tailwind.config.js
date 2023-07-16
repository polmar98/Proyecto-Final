/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        verdeFooter: "#295943",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
