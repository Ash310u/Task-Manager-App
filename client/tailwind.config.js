/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/backgrounds/bg.jpg')"
      },
      width : {
        'login': '450px'
      },
      height : {
        'login': '580px'
      }
    },
  },
  plugins: [],
}

