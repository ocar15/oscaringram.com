/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'bisque': "#FFE4C4",
        'oscar-red':"#c00000",
        'oscar-purple':"#2a0026",
        'oscar-pink':"#ed7f80",
        'dark-pink':"#8f4c4c"
      },
      fontFamily :{
        vaulto: ["vaulto", "sans-serif"],
      },
      backgroundImage: {
        'cubes': "url('/img/cubes.png')",
        'dark-cubes': "url('/img/dark-cubes.png')"
      }
    },
  },
  plugins: [],
}

