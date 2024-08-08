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
      borderWidth: {
        '24': '24px'
      }
      
    },
  },
  plugins: [],
}

