/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000112",
      "dark-mode": "#20212C",
      "light-mode": "#F4F7FD",
      "dark-gray": "#2B2C37",
      "dark-lines": "#3E3F4E",
      "light-lines": "#E4EBFA",
      "gray-medium": "#828FA3",
      white: "#FFF",
      purple: "#635FC7",
      "purple-hover": "#A8A4FF",
      red: "#EA5555",
      "red-hover": "#FF9898",
    },
    fontSize: {
      xl: ["24px", { lineHeight: "30px", fontWeight: "700" }],
      lg: ["18px", { lineHeight: "23px", fontWeight: "700" }],
      md: ["15px", { lineHeight: "19px", fontWeight: "700" }],
      sm: ["12px", { lineHeight: "15px", fontWeight: "700" }],
      p: ["13px", { lineHeight: "23px", fontWeight: "400" }],
      "p-bold": ["12px", { lineHeight: "15px", fontWeight: "700" }],
    },
    extend: {},
  },
  plugins: [],
};
