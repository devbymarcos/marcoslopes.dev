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
      keyframes: {
        move: {
          "0%": { transform: "translateY(-18px)" },
          "60%": { opacity: ".5" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
        open: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        time: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "up-down": "move 1.2s infinite",
        "open-alert": "open 0.2s linear",
        "frame-time": "time 1s linear",
      },
      colors: {
        "color-primary": "#0F0F0F",
        "color-secondary": "#1c1b1b",
        "color-border": "#3C3C3C",
      },
    },
  },
  plugins: [],
};
