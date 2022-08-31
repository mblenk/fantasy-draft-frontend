/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#051622',
        'secondary': '#1BA098',
        // 'tertiary': '#b39474',
        'tertiary': 'yellow'
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'translate3D(24rem)', opacity:'0' },
          '100%': { transform: 'translate3D(0rem)', opactiy:'1' }
        },
        fadeout: {
          '0%': { transform: 'translate3D(0rem)', opacity:'1' },
          '100%': { transform: 'translate3D(24rem)', opacity:'0' }
        }
      },
      animation: {
        fadein: 'fadein 0.5s ease-in',
        fadeout: 'fadeout 0.5s ease-out',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '40': 'repeat(40, minmax(0, 1fr))',
        '48': 'repeat(48, minmax(0, 1fr))',
        '56': 'repeat(56, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr))',
        '72': 'repeat(72, minmax(0, 1fr))',
        '80': 'repeat(80, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

// #DEB992