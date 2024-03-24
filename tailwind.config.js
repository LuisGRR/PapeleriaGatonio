/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./articulos/articulos.html"],
  theme: {
    extend: {},
    colors: {
      "science-blue": {
        50: "#ecfaff",
        100: "#d4f2ff",
        200: "#b2ebff",
        300: "#7de0ff",
        400: "#40cbff",
        500: "#14acff",
        600: "#008bff",
        700: "#0073ff",
        800: "#0062d9",
        900: "#0850a0",
        950: "#0a3161",
      },
      orange: "#F6995C",
      blue: "#51829B",
      aqua: "#9BB0C1",
      beige: "#EADFB4",
      whithe:"#FFFFFF",
    },
  },
  plugins: [],
};
