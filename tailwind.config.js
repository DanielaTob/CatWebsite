module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        cat: "url('/src/assets/bg-cat.png')",
      }),
    },
  },
  plugins: [require("daisyui")],
}
