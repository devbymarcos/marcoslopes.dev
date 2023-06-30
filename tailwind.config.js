/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#0F0F0F",
        "color-secondary": "#1c1b1b",
        "color-border": "#3C3C3C",
      },

      keyframes: {
        move: {
          "0%": { transform: "translateY(-18px)" },
          "60%": { opacity: ".5" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        updown: "move 1.2s infinite",
      },
    },
  },
  plugins: [],
};
