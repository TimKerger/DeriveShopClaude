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
        logo: ["var(--font-playfair)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        muted: "#767676",
        border: "#E5E5E5",
        "card-bg": "#F5F5F5",
      },
      letterSpacing: {
        nav: "0.2em",
      },
      maxWidth: {
        shop: "1340px",
      },
      fontSize: {
        "page-title": ["3rem", { lineHeight: "1.1", fontWeight: "300" }],
      },
    },
  },
  plugins: [],
};

export default config;
