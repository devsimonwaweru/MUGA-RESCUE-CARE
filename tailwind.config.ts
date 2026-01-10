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
    },
  },
  plugins: [],
};
export default config;