/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            blue: "#1fb6ff",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
            color1: "#FFE6BC",
            color2: "#E4CDA7",
            color3: "#C3B091",
            color4: "#8E806A",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
};
