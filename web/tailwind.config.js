module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["'Fira Code'"],
      body: ["'Fira Code'"],
    },
    extend: {
      colors: {
        purpleDark: '#2E0F59',
        purpleLight: '#624973',
        gold: '#D9B166',
        peach: '#D99B84',
        whiteSoft: '#F2F2F2',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
