const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // plugins: [nextui()],
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: {
            DEFAULT: '#F5F5DC'
          }
        }, // light theme colors
      },
      dark: {
        colors: {
          background: {
            DEFAULT: '#313131'
          }
        }, // dark theme colors
      },
    },
  })],
}