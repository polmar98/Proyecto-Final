/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        verdeFooter: "#295943",
        verdeFooterHover: "#1e4735",
        customGray: "#FBFBFB",
        paypalBlue: "#003087",
        focusColor: "#00aaff",
        paypalYellow: "#FFC439",
        paypalBlue: "#003087",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  content: [
    // ...
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
};
