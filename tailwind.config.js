const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#DFDFDF',
      dark: '#170F07',
      gold: '#928656',
      white: '#ffff',
      brown: '#592C13',
      gray800: 'rgb(31 41 55)'
    },
  extend: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'lora': ['Lora', 'sans-serif']
    },
    height: {
      '90': '50rem',
      'img': '43rem',
      'imgmd': '35rem',
      spinner: '45vh'
    },
    width: {
      'container': '90%',
      'containermax': '100rem',
      img: '31rem'
    },
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
    colors: {
      amber: colors.amber,
      emerald: colors.emerald,
    }
  },
},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
