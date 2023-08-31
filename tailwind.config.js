/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blueMain' : 'hsl(217, 54%, 11%)',
        'blueCard' : 'hsl(216, 50%, 16%)',
        'blueLine':  'hsl(215, 32%, 27%)',
        'softBlue':  'hsl(215, 51%, 70%)',
        'cyan'    :  'hsl(178, 100%, 50%)',
        'softBorder':'rgb(47, 65, 91)'
      },
      fontFamily: {
        'outfit' : ['"Outfit"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

