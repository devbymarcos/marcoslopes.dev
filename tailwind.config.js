/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        "up-down": "move 2s infinite",
        "open-alert": "open 0.2s linear",
        "frame-time": "time 1s linear",
      },
      colors: {
        "primary-light": "#FFFFFF",
        "secondary-light": "#DFDFDF",
        "btn-primary": "#7843E9",
        "btn-text": "#F3F3F3",
        "primary-dark": "#000",
        "secondary-dark": "#171717",
        "input-color": "#BBBBBB",
        "font-color": "#0F172A",
        "font-color-dark": "#DEDEDE",
        "blue-custom-dark": "#0F172A",
        "blue-custom-light": "#556B8D",
        "pink-custom": "#E11D48",
        "orange-custom": "#FF610C",
        "pink-custom": "#FF053F",
      },
    },
  },
  plugins: [],
};
