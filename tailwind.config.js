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
        gold: {
          50: "#FBF6EC",
          100: "#F5E9CE",
          200: "#EAD6A0",
          300: "#E0C077",
          400: "#CDA24C",
          500: "#B8862F",
          600: "#996D22",
          700: "#7A561B",
        },
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
