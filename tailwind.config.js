export default {
  darkMode: "class",  // ← 추가!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gowun: ["GowunDodum", "sans-serif"],
      },
      colors: {
        primary: "rgb(177, 35, 35)",
        "primary-light": "rgb(177, 60, 60)",
        "primary-dark": "rgb(140, 20, 20)",

        secondary: "rgb(177, 110, 50)",
        "secondary-light": "rgb(177, 130, 70)",
        "secondary-dark": "rgb(150, 90, 40)",

        bg: "rgb(245, 240, 240)",
        card: "rgb(255, 250, 250)",
        border: "rgb(220, 200, 200)",

        "text-main": "rgb(34, 34, 34)",
        "text-sub": "rgb(100, 100, 100)",
        "text-primary": "rgb(177, 35, 35)",
      },
    },
  },
  plugins: [],
};
