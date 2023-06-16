const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ]
}
