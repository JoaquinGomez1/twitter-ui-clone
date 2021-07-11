const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: { "spin-fast": "spin .75s linear infinite" },
    },
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontSize: { md: "0.950rem" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
