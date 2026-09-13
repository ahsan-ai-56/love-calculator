/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#FFF7F8",
          100: "#FFEEF0",
          200: "#FBD7DC",
          400: "#F08CA0",
          500: "#E85D77",
          600: "#D6395B",
          700: "#B22B49",
        },
        ink: "#231F20",
        paper: "#FFFFFF",
        mist: "#F7F5F4",
      },
      fontFamily: {
        serif: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        soft: "10px",
      },
    },
  },
  plugins: [],
};
