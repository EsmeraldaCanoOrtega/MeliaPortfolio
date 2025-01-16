/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Rutas para detectar clases utilizadas
  ],
  theme: {
    extend: {
      keyframes: {
        gradientSwipe: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "100%" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        iconHover: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        gradientSwipe: "gradientSwipe 1s ease infinite",
        scaleUp: "scaleUp 0.5s ease-in-out",
        iconHover: "iconHover 1s ease forwards",
      },
    },
  },
  plugins: [],
};
