/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shadegreen: "#3b5d50",
        limeyellow: "#f9bf29",
        darkgrey: "#2f2f2f",
      },
    },
  },
  plugins: [],
};
