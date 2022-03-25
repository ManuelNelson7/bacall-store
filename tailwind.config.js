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
      brown: '#592C13'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'sans-serif']
      },
      height: {
        '90': '50rem',
        'img': '43rem',
        'imgmd': '35rem'
      },
      width: {
        'container': '90%',
        'containermax': '100rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
