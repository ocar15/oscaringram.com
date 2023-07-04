/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cubes': "url('/img/cubes.png')"
      }
    },
  },
  plugins: [],
}

