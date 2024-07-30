/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7D1D7",
        secondary: "#EEA343",
        navy: {
          100: "#004793",
          200: "#00162D",
        },
      },
    },
  },
  plugins: [],
};
