// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e0e0e",
        gold: "#FFD700",
        success: "#00FF84",
      },
    },
  },
  plugins: [],
};
