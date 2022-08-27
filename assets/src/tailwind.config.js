/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../index.html'],
  theme: {
    extend: {
      colors:{
        primary: '#cc00ff',
        secondry: '#7000ff',
        heading_c: '#DDD',
        body_c: '#9ba0b8',
        border_c: '#ffffff26',
        fun_fact: '#00000026',
      },
      blur: {
        '4xl': '140px'
      },
      spacing:{
        '1/5': '20%'
      },
      boxShadow: {
        sect: '0 5px 20px rgb(0 0 0 / 25%)',
      },
      aspectRatio: {
        '1/0.5' : '1/0.5',
      }
    },
  },
  plugins: [],
}
