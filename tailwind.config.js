/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#7AA65A",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#F3F3F3",
      dark: "#1F1F1F",
      light: "#F9F9F9",
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
      yellow: "#FFFF00",
      orange: "#FFA500",
      purple: "#3A2676",
      pink: "#FFC0CB",
    },
    borderWidth: {
      1: "1px",
      1.5: "1.5px",
      2: "2px",
      3: "3px",
    },
    fontFamily: {
      proxima_nova: ["proxima-nova", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1124px) { ... }
      herolg: "1190px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      maxxl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
