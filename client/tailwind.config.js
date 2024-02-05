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
        'login': '450px',
        'form': '350px',
      },
      height : {
        'login': '580px',
        'form': '350px',
      }
    },
  },
  plugins: [],
}

