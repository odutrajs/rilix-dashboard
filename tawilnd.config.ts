/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rilix: {
          primary: "#4e73df",
          dark: "#3c5dc9",
          hover: "#3f66d4",
          text: "#ffffff",
          textLight: "#cbd5e1",
          logout: "#ef4444",
          logoutHover: "#fecaca",
        },
      },
    },
  },
  plugins: [],
};
