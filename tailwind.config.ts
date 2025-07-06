import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand_gray: {
          100: "#9F9F9F",
          200: "#696969",
          300: "#6B6B6B",
          400: "#4F4F4F",
        },
        brand_black: {
          100: "#535353",
          200: "#051113",
        },
        brand_blue: {
          100: "#D6E0FF", // Lightest tint
          200: "#8CAEFF", // Medium-light tint
          300: "#0151FE", // Base brand color
        },

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-plusJakarta)"],
      },
      backgroundImage: (theme) => ({
        "primary-gradient":
          "linear-gradient(90deg, hsla(225, 100%, 40%, 1) 0%, hsla(225, 100%, 70%, 1) 100%)",
        "secondary-gradient":
          "linear-gradient(90deg, rgba(0, 208, 254, 0.001) 50%, rgb(230, 250, 255) 100%)",
        "gradient-radial":
          "radial-gradient(hsla(225, 100%, 54%, 0.15),hsla(189, 100%, 50%, 0.25))",
      }),

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
