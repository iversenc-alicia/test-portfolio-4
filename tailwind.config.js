module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      "colors": {
        'primary-light': '#FAF7FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#F7F6F8',

        'primary-dark': '#250D38',
        'secondary-dark': '#361044',
        'ternary-dark': '#501E51',
      },

      "fontFamily": {
        "trap": "Trap"
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}