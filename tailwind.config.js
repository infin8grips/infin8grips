module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.25s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};

