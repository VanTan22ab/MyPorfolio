/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideLeftToRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideRightToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px 4px rgba(141, 142, 255, 0.5)" },
          "100%": { boxShadow: "0 0 20px 6px rgb(43, 218, 231)" },
        },
        slide: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        slide: "slide 0.5s ease-in-out",
        glow: "glow 1.5s infinite alternate",
        slideLeftToRight: "slideLeftToRight 1s ease-in-out infinite",
        slideRightToLeft: "slideRightToLeft 1s ease-in-out infinite",
        gradient: "gradient 8s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        slideIn: "slideIn 1s ease-in-out",
        slideOut: "slideOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
