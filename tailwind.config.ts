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
        page: {
          DEFAULT: "var(--bg-page)",
          surface: "var(--bg-surface)",
          card: "var(--bg-card)",
          cardHover: "var(--bg-card-hover)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
        },
        brand: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          light: "var(--color-accent-light)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          subtle: "var(--border-subtle)",
        },
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        cardHover: "0 14px 34px -4px rgba(79, 70, 229, 0.12), 0 4px 14px -2px rgba(0, 0, 0, 0.04)",
        buttonGlow: "0 8px 22px -3px rgba(79, 70, 229, 0.35)",
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
