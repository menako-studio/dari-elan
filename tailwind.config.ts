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
        "brand-bg": "#FFFDF4",
        "off-white": "#FFFDF4",
        "brand-pink": "#D36F83",
        "brand-pink-light": "#F191A9",
        "brand-pink-soft": "#FFB2C4",
        "brand-card": "#E5DED4",
        "brand-muted": "#606060",
        "shop-bg": "#F5EFE6",
        ink: "#111111",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        garamond: ["var(--font-garamond)", "Garamond Premiere Pro", "EB Garamond", "serif"],
        suisse: ["var(--font-inter)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        times: ["var(--font-garamond)", "Garamond Premiere Pro", "EB Garamond", "Times New Roman", "serif"],
        unica: ["var(--font-unica)", "LL Unica 77", "Courier New", "monospace"],
        poynter: ["var(--font-garamond)", "Garamond Premiere Pro", "EB Garamond", "serif"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "2/3": "2 / 3",
        "21/9": "21 / 9",
        "4/5": "4 / 5",
      },
    },
  },
  plugins: [],
};

export default config;
