import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "Jost",
        inter: "Inter",
      },
      colors: {
        bgBlack: "rgba(0,0,0,0.97)",
        highlight: "#0096C3",
        overlay: "rgba(0,150,195,0.05)",
        ghostGray: "#A9A9A9",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            filter: "blur(20px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        "fade-in-first": "fade-in 1.5s linear",
        "fade-in-second": "fade-in 2.5s linear ",
        "fade-in-third": "fade-in 3.5s linear ",
        "fade-in-fourth": "fade-in 2.5s linear ",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
