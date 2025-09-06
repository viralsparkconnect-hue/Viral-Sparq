/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FBBF24",
        accent: "#10B981",
        background: "#F3F4F6",
        textcolor: "#111827"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px"
        }
      }
    }
  },
  plugins: []
};