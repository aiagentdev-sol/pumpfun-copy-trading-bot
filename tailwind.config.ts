import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': { 'min': '902px' },
      },
      colors: {
        primary: {
          100: "#E4F5F2",
          200: "#10A678",
          300: "#2A896B",
          400: "#5FBB9E ",
          500: "#435854",
          600: "#34554C",
          700: "#071B17",
          800: "#1C1F27",
          900: "#8997AE"
        },
        secondary: {
          100: "#507A6E",
          200: "#111318",
          300: "#080A0C",
          400: "#637592",
          500: "#191D24",
          600: "#181B22",
          700: "#5B687D",
          800: "#313741",
          900: "#10A678"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "btn-inner": "0px 0px 2px 2px #5FBB9E inset",
        box: "6px -6px 44px 0px rgba(35, 68, 58, 0.20) inset",
        btn: "4px 4px 21px 0px rgba(7, 30, 26, 0.50) inset",
        deposit: "0px -6px 22px 2px #89FFD9 inset",
      },
    },
  },
  plugins: [],
};
export default config;
