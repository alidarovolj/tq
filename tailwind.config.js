/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#436dff",
        secondaryColor: "#f4f5fa",
        darkBg: "#232323",
        darkElBg: "#000",
        darkText: "#dfdfdf",
      },
      width: {
        half: "49%",
        third: "32%"
      },
    },
  },
  plugins: [],
};
