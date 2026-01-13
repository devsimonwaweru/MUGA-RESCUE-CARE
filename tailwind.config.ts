import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e63946',
          blue: '#1d3557',
          light: '#f1faee',
          accent: '#a8dadc',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // Uses Inter
        serif: ['var(--font-merriweather)'], // Uses Merriweather
      },
      // --- ANIMATION FOR FLOATING CTA ---
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // ------------------------------------
    },
  },
  plugins: [],
};
export default config;