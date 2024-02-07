/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/loginPage/backgrounds/bg.jpg')"
      },
      width : {
        'login-moon': '50%',
        'login': '60%',
      },
      height : {
        'login-moon': '70%',
        'login': '60%',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

