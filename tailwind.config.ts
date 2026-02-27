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
        bg: "#070B11",
        surface: "#0F1621",
        cyan: "#4FB6FF",
        violet: "#4C6FFF",
        textSoft: "#9BA9BB"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,182,255,0.24), 0 0 28px rgba(79,182,255,0.12)",
        violet: "0 0 0 1px rgba(76,111,255,0.25), 0 0 24px rgba(76,111,255,0.12)"
      },
      fontFamily: {
        display: ["'Sora'", "'Space Grotesk'", "'Inter'", "sans-serif"],
        body: ["'Manrope'", "'Plus Jakarta Sans'", "'Inter'", "sans-serif"]
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
