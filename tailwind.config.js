const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: { "spin-fast": "spin .75s linear infinite" },
      transitionProperty: {
        width: "width",
      },
    },
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontSize: { md: "0.950rem", ...defaultTheme.fontSize },
    minHeight: {
      96: "24rem",
      110: "28rem",
      ...defaultTheme.minHeight,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
