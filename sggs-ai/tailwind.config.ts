import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marble: "#F8F5EF",
        ivory: "#FFFDF7",
        antiqueGold: "#B8892D",
        deepGold: "#8A641F",
        royalBlue: "#102A43",
        emerald: "#245C4A",
        sandstone: "#D9C3A3",
        bronze: "#7A542E",
      },
      fontFamily: {
        display: ["Marcellus", "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        body: ["Jost", "ui-sans-serif", "system-ui", "sans-serif"],
        gurmukhi: ['"Noto Serif Gurmukhi"', "serif"],
      },
      boxShadow: {
        marble: "0 24px 60px -28px rgba(58,42,24,0.18)",
        card: "0 16px 40px -28px rgba(58,42,24,0.20)",
        gold: "0 4px 16px -4px rgba(138,100,31,0.55)",
      },
      letterSpacing: { wide2: "0.18em", wide3: "0.32em" },
    },
  },
  plugins: [],
};
export default config;
