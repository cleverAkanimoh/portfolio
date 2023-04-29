/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      sofia: ['Sofia', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans'],
      Handrawn: ['Delicious Handrawn', 'sans'],
      Lato: ['Lato', 'sans'],
      Inter: ['Inter', 'sans'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1250px'
    },
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'brown': '#A52A2A',
        'saddle-brown': '#8B4513',
        'chocolate': '#D2691E',
        'copper': '#B87333'
      },
    },
  },
  plugins: [],
}
