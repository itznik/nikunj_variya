import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Add this line
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        muted: "#8F8F91",
        accent: "#E2E2E2",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
export default config;
