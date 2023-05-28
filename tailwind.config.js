/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}" , "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#1a2439",
      },
      fontFamily: {
        Homa: ["B Homa", "sans-serif"],
      },
    },
  },
  plugins: [

  ],
});

