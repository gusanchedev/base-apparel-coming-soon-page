module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
        initialColorGradient1: "hsl(0, 0%, 100%)",
        finalColorGradient1: "hsl(0, 100%, 98%)",
        initialColorGradient2: "hsl(0, 80%, 86%)",
        finalColorGradient2: "hsl(0, 74%, 74%)",
      },
      backgroundImage: {
        desktop: "url('./images/bg-pattern-desktop.svg)",
      },
    },
  },
  plugins: [],
};
