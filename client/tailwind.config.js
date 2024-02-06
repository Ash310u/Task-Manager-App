/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/loginPage/backgrounds/bg.jpg')",
        'tasks': "url('/src/assets/loginPage/backgrounds/tasks.jpeg')"
      },
      width : {
        'login-moon': '50%',
        'login': '40%',
      },
      height : {
        'login-moon': '70%',
        'login': '80%',
      }
    },
  },
  plugins: [],
}

