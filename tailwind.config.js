/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.ts", "./templates/**/*.html.twig"],
  theme: {
    fontFamily: {
      mont: ['"Montserrat"'],
      noto: ['"Noto Sans JP"', 'sans'],
    },
    colors: {
      mainGreen: "#07913A",
      black:"#242424",
      white: "#FFFFFF",
    },
    screens: {
      xxs: "414px",
      xs: "429px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      max: "1920px",
    },
    letterSpacing: {
      normal: "0",
      tight: ".02em",
      wide: ".04em",
      wider: ".08em",
      widest: ".1em",
    },
    extend: {
      fontSize: {
        "10px": "0.625rem",
        "16px": "1rem",
        "18px": "1.125rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "28px": "1.75rem",
        "32px": "2rem",
        "40px": "2.5rem",
        "44px": "2.75rem",
        "48px": "3rem",
        "56px": "3.5rem",
        "64px": "4rem",
        "100px": "6.25rem",
      },
      lineHeight: {
        0.8: "0.8",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
        1.5: "1.5",
        1.6: "1.6",
        1.7: "1.7",
        1.8: "1.8",
        2: "2",
        2.3: "2.3",
        2.5: "2.5",
      },
    },
  },
  plugins: [],
}

