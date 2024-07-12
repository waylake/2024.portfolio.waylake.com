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
        "accent-color": "#4ecdc4",
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
        "gradient-dark": "linear-gradient(45deg, #2c3e50, #34495e)",
      },
      transitionDuration: {
        "800": "800ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};

export default config;
