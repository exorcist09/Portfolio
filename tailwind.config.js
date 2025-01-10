/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      krona: ["Krona One", "serif"],
    },
    colors:{
      gogreen:"#08EB11",
      black:"black",
      white:"white"
    },
    extend: {},
  },
  plugins: [],
};
