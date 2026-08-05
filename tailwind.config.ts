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
        "off-white": "#F9F9F8",
        "shop-bg": "#F0F0F0",
        ink: "#111111",
      },
      fontFamily: {
        poynter: ["var(--font-poynter)", "Georgia", "serif"],
        suisse: ["var(--font-suisse)", "Helvetica Neue", "Arial", "sans-serif"],
        times: ["var(--font-times)", "Times New Roman", "Times", "Baskerville", "serif"],
        unica: ["var(--font-unica)", "LL Unica 77", "Courier New", "monospace"],
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
