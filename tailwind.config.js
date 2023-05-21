/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red": "#dc2626",
        "green": "#16a34a",
        "crypto-blue-light": "#18194B",
        "crypto-purple-light": "#242450",
        "crypto-purple-button": "#6C61FF",
        "crypto-grey": "#262626",
        "crypto-black": "#131212",
        "crypto-white": "#FEFEFF",
      },
    },
  },
  plugins: [],
};
