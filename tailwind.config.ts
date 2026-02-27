import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F14",
        surface: "#111827",
        cyan: "#00E5FF",
        violet: "#7C3AED",
        textSoft: "#B4C0D4"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,229,255,0.24), 0 0 35px rgba(0,229,255,0.15)",
        violet: "0 0 0 1px rgba(124,58,237,0.3), 0 0 30px rgba(124,58,237,0.2)"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Satoshi'", "'Inter'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"]
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "hero-glow":
          "radial-gradient(80% 70% at 20% 20%, rgba(0,229,255,0.18), transparent 70%), radial-gradient(70% 65% at 80% 15%, rgba(124,58,237,0.16), transparent 75%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
