/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'bisque': "#FFE4C4"
      },
      backgroundImage: {
        'cubes': "url('/img/cubes.png')"
      }
    },
  },
  plugins: [],
}

