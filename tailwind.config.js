const plugin = require("tailwindcss");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': "var(--color-primary)",
        'primary-light': "var(--color-primary-light)",
        'primary-light-focus': "var(--color-primary-light-focus)",
        'secondary': "var(--color-secondary)",
        'accent': "var(--color-accent)",
        'title': "var(--color-title)",
        'sub-title': "var(--color-sub-title)",
        'footer': "var(--color-footer)",
        'white': "var(--color-white)",
        'gray': "var(--color-gray)",
        'gray-light': "var(--color-gray-light)",
        'gray-300': "var(--color-gray)"
      }
    }
  },
  plugins: []
}