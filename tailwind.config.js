/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9DFCE",
        primaryBlack: {
          100: "#1e2125",
          200: "#35373b",
          300: "#4b4d51",
        },
      },
    },
  },
  plugins: [],
};
