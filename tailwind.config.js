/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'backColor' : '#001E36',
        'myOrange': '#FF543E'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      fontSize: {
        '10xl': '6rem',
      },
      borderWidth: {
        '32': '32px'
      }
      
    },
  },
  plugins: [],
}

