import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xl: { max: "1600px" },
      lg: { max: "1199px" },
      md: { max: "991px" },
      sm: { max: "767px" },
      xs: { max: "575px" },
    },
    fontSize: {
      md: ["18px", "23px"],
      base: ["20px", "34px"],
      lg: ["22px", "29px"],
      xl: ["28px", "37px"],
      xxl: ["var(--font-size-xxl)", "var(--lineheight-xxl)"],
    },
    extend: {
      fontFamily: {
        playfair: "var(--font-playfair-display)",
        clicker: "var(--font-clicker-script)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
