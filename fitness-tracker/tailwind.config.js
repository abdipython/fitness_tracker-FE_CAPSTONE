/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: "#3B82F6", // light blue
          DEFAULT: "#2563EB", // main brand blue
          dark: "#1E3A8A", // dark blue
        },
        tracker: {
          bg: "#1E3A8A", // tracker card background
          circle: "#1E40AF", // weekday circle
        },
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
