/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#2563EB",
        secondary: "#1E40AF",
        dark: "#111827",
        light: "#F9FAFB",

        warning: "#FACC15",
        success: "#22C55E",
        danger: "#EF4444",

        sidebar: "#0F172A",
        card: "#FFFFFF",
        body: "#F3F4F6",

        luxury: "#F4B400",
        luxuryDark: "#111111",
      },


      fontFamily: {
        sans: [
          "Poppins",
          "sans-serif"
        ],
      },


      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        hover: "0 20px 40px rgba(0,0,0,.15)",
        blue: "0 10px 35px rgba(37,99,235,.30)",
      },


      borderRadius: {
        xl: "20px",
        "2xl": "30px",
      },


      animation: {
        fade: "fade 1s ease",
        slide: "slide .6s ease",
        float: "float 3s ease-in-out infinite",
        zoom: "zoom .4s ease",
      },


      keyframes: {

        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },


        slide: {
          "0%": {
            transform: "translateY(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },


        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },


        zoom: {
          "0%": {
            transform: "scale(.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

      },


      backgroundImage: {

        hero:
          "linear-gradient(to right,#111827,#000000)",

        admin:
          "linear-gradient(to right,#2563EB,#1D4ED8)",

        glass:
          "linear-gradient(135deg,rgba(255,255,255,.25),rgba(255,255,255,.05))",

      },

    },
  },


  plugins: [],
};