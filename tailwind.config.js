/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        interDisp: ["Inter-disp"],
      },
      colors: {
        tableHeader: "rgba(255,255,255,0.04)",
        borderColor: "#4B5258",
      },
      screens: {
        sm: { max: "678px" },
      },
    },
  },
  plugins: [],
};
