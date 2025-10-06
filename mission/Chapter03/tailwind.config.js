export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: { transform: "translateX(200px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(50px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideRight: "slideRight 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
