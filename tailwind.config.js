module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Blue
        secondary: "#64748b", // Gray
        legalBlack: "#000000",
        legalWhite: "#FFFFFF",
        legalGray: "#F5F5F5",
        accent: "#FF4500",
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      },
    },
  },
  plugins: [],
};
