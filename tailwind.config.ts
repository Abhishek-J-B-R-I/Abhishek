import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          bg: "#080C15",
          card: "#0E1628",
          cardHover: "#131D35",
          border: "#1A253C",
          purple: "#A855F7",
          cyan: "#00D2FF",
          indigo: "#6366F1",
          emerald: "#10B981",
        },
      },
      boxShadow: {
        neonPurple: "0 0 25px rgba(168, 85, 247, 0.35)",
        neonCyan: "0 0 25px rgba(0, 210, 255, 0.35)",
        neonIndigo: "0 0 25px rgba(99, 102, 241, 0.35)",
        neonCard: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
