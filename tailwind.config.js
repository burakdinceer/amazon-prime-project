/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        '128' : '32rem',
        '164' : '40rem'
        
      },
      backgroundImage:{
        'mainBg': "url('./loginImage.jpg')"
      }
      
    },
  },
  plugins: [],
}
