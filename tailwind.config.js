/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#f8f6fb",
        button: "#7F3DFF",
        secondaryButton: "#2E2E2E",
      },
      borderColor: {
        primary: "#E3E5E5",
        main: "#7F3DFF",
        dottedLine: "#57647C",
      },
      textColor: {
        primary: "#1E1F4B",
        secondary: "#2E3E5C",
        linkHover: "#7F3DFF",
      },
      colors: {
        primary: "#7F3DFF",
      },
    },
  },
  plugins: [],
};
