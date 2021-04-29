const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "content/**/**.md"
    ]
  },
  theme: {
    extend: {
      colors: {
        fuchsia: "#C132AA"
      },
      fontFamily: {
        boshonto: ["Boshonto"]
      }
    }
  },
  variants: {},
  plugins: [typography]
};
