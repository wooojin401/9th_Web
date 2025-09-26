// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-white",
    "bg-gray-800",
    "text-black",
    "text-white",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

