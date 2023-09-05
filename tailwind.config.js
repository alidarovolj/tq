/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], darkMode: "class", theme: {
        extend: {
            colors: {
                mainColor: "#D62D2D",
                blackColor: "#373737",
                whiteColor: "#f3f3f4",
                darkBg: "#131313",
                darkBgColor: "#373737"
            }, width: {
                half: "49%", third: "32%", sixth: "16%", fourth: "24.5%"
            },
        },
    }, plugins: [],
};
