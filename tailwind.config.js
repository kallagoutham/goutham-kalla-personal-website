/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#000000",
        "black-200": "#222222",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
      },
      animation: {
        'bg-move': 'moveBackground 45s infinite linear', 
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: '0% 0%' },  
          '100%': { backgroundPosition: '100% 100%' },  
        },
      },
    },
  },
  plugins: [],
};
