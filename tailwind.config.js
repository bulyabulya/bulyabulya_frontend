/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Some useful comment
    extend: {
      fontFamily: {
        score: ['SCoreDream', 'sans-serif'],
      },
      colors: {
        mainGreen: '#00c714',
        subGreen: '#4ed260',
        lightGrey: '#f9f9f9',
        grey: '#bbbbbb',
        lightBlack: '#333333',
      },
      dropShadow: {
        '3xl': '5px 5px 10px rgba(0, 0, 0, 0.25)',
        btn: '2px 2px 4px rgba(0,0,0,0.25)',
      },
      height: {
        100: '86vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
