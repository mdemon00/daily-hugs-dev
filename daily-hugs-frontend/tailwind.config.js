/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lato: ["lato"],
      mulish: ["Mulish"],
    },
    extend: {
      colors: {
        neutral: {
          0: "#00000",
          10: "#FFFFFF",
          50: "#F0F0F0",
          100: "#E4E4E4",
          150: "#D7D7D7",
          200: "#CBCBCB",
          250: "#BEBEBE",
          300: "#B2B2B2",
          350: "#A5A5A5",
          400: "#999999",
          450: "#8C8C8C",
          500: "#808080",
          550: "#737373",
          600: "#676767",
          650: "#5A5A5A",
          700: "#4E4E4E",
          750: "#414141",
          800: "#353535",
          850: "#282828",
          900: "#1C1C1C",
          950: "#0E0E0E",
          1000: "#39B990",
        },
        accent: {
          purple: "#4035DA",
          salmonPink: "#FFA4A4",
          lightPurple: "#C7BFE3",
          lightBlue: "#D0E5F5",
          yellow: "#FFEE00",
          red: "#DE2323",
          grey: "#707070",
        },
        error: {
          50: "#E34850",
        },
      },
      fontSize: {
        8: [
          "0.5rem",
          {
            letterSpacing: "0rem",
          },
        ],
        10: [
          "0.625rem",
          {
            letterSpacing: "0rem",
          },
        ],
        12: [
          "0.75rem",
          {
            letterSpacing: "0rem",
          },
        ],
        14: [
          "0.875rem",
          {
            letterSpacing: "0rem",
          },
        ],
        16: [
          "1rem",
          {
            letterSpacing: "0rem",
          },
        ],
        20: [
          "1.25rem",
          {
            letterSpacing: "0rem",
          },
        ],
        24: [
          "1.5rem",
          {
            letterSpacing: "0rem",
          },
        ],
        26: [
          "1.625rem",
          {
            letterSpacing: "0rem",
          },
        ],
        28: [
          "1.75rem",
          {
            letterSpacing: "0rem",
          },
        ],
        30: [
          "1.875rem",
          {
            letterSpacing: "0rem",
          },
        ],
        32: [
          "2rem",
          {
            letterSpacing: "0rem",
          },
        ],
        38: [
          "2.375rem",
          {
            letterSpacing: "0rem",
          },
        ],
        40: [
          "2.5rem",
          {
            letterSpacing: "0rem",
          },
        ],
        45: [
          "2.8125rem",
          {
            letterSpacing: "0rem",
          },
        ],
        50: [
          "3.125rem",
          {
            letterSpacing: "0rem",
          },
        ],
        56: [
          "3.5rem",
          {
            letterSpacing: "0rem",
          },
        ],
        64: [
          "4rem",
          {
            letterSpacing: "0rem",
          },
        ],
      },
      fontFamily: {
        sans: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [],
};
