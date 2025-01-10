/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F3E9DC",
        caramel: "#C08552",
        navbar: "##C7BEA0",
      },
      fontFamily: {
        jomhuria: ["Jomhuria", "sans-serif"],
        abz: ["ABeeZee", "serif"],
      },
      fontSize: {
        "10xl": "11rem",
        "11xl": "12rem",
      },
    },
  },
  plugins: [],
};
