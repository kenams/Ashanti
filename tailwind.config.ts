import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F7E8EB",
        rose: "#E9C8D0",
        nude: "#F5EFEC",
        ink: "#241F23",
        gold: "#B89362",
        mist: "#FFF9FB"
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-playfair)"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(36, 31, 35, 0.08)",
        card: "0 16px 32px rgba(36, 31, 35, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(233, 200, 208, 0.65), transparent 35%), radial-gradient(circle at bottom right, rgba(184, 147, 98, 0.18), transparent 30%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
