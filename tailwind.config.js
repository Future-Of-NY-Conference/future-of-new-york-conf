/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient": "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
}
