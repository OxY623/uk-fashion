import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    colors: {
      transparent: "transparent",
      lightPink: "#FF879C",
      darkPink: "#F05873",
      grey: "#293459",
      darkGrey: "#1F2743",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        displayPrompt: "Prompt, sans-serif",
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
