/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#EFF6FF",
          600: "#2563EB",
          700: "#1D4ED8",
          primary: "#ff8901",
          secondary: "#fb923c",
        },
        scroll: {
          track: "transparent",
          thumb: "#ff8901",
          hover: "#fb923c",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }), // optional
  ],
};
