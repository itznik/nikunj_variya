import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Espresso & Crimson Design System
        canvas: "#121110",      // Warm Obsidian (Base)
        surface: "#1C1A19",     // Espresso Dark (Cards/Bento)
        edge: "#2A2726",        // Warm Edge (Crisp 1px borders)
        "text-main": "#F4F0E6", // Alabaster White (H1/H2)
        "text-sub": "#A6A19C",  // Muted Sand (Paragraphs)
        accent: "#FF331F",      // Volt Crimson (Buttons/WebGL Highlights)
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
