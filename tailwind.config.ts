import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Baskerville", "serif"],
    },
    extend: {
      colors: {
        beige: {
          300: "#f5f4f0",
          500: "#edebdf",
          700: "#686464",
        },
        accent: {
          DEFAULT: "#6e9876",
          dark: "#0e3b31",
        },
      },
    },
  },
};

export default config;
