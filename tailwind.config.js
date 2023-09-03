/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "yeseva-One": ["Yeseva One", "sans-serif"],
        "josefin-Sans": ["Josefin Sans", "sans-serif"],
      },
      colors: {
        customTextColor: "#2193c4",
        customBackgroundColor: "#a3b3f0",
        customPrimaryColor: "#73a8e7",
        customSecondaryColor: "#80e4ea",
        customAccentColor: "#55e2c6",
      },
    },
  },
  plugins: [],
};
