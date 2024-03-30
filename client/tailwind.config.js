/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/loginPage/backgrounds/bg.jpg')",
      },
      width : {
        'login': '60%',
        'md-login': '80%',
      },
      height : {
        'login': '60%',
        'md-login': '80%',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

