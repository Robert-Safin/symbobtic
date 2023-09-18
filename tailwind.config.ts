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
        bgBlack: "rgba(0,0,0,0.95)",
        highlight: "#0096C3",
        overlay: "rgba(0,150,195,0.05)",
        ghostGray: "#A9A9A9",
      },
    },
  },
  plugins: [],
};
export default config;
