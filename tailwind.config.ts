import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-white": "#F7F5F0",
        parchment: "#EDE9E1",
        stone: "#C8C2B8",
        dusk: "#8C8278",
        charcoal: "#2A2723",
        ink: "#1A1714",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      letterSpacing: {
        editorial: "0.2em",
        wide: "0.12em",
      },
      fontSize: {
        "display-xl": ["7rem", { lineHeight: "1", fontWeight: "300" }],
        "display-lg": ["5rem", { lineHeight: "1.05", fontWeight: "300" }],
        "display-md": ["3.5rem", { lineHeight: "1.1", fontWeight: "300" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", fontWeight: "300" }],
      },
      maxWidth: {
        site: "1440px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        "draw-line": "drawLine 2s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "2/3": "2 / 3",
        "5/7": "5 / 7",
      },
    },
  },
  plugins: [],
};

export default config;
