import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allrounder: ['"AllrounderMonumentTest"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(120px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpAndGrow: {
          "0%": { transform: "translateY(50px)", opacity: "1", fontSize: "5rem" },
          "50%": { transform: "translateY(0)", opacity: "1", fontSize: "5rem" },
          "100%": { transform: "translateY(0)", opacity: "1", fontSize: "5.5rem" },
        },
      },
      animation: {
        slideUp: 'slideUp 1.2s ease-in-out forwards',
        slideUpAndGrow: "slideUpAndGrow 1s ease-in-out forwards",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
