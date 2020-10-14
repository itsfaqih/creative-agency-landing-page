module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      padding: {
        '14': '3.5rem'
      },
      height: {
        '1/2': '50%',
        '72': '18rem'
      },
      backgroundColor: {
        primary: '#341d74',
        secondary: '#f39a8b',
        'light-orange': '#fef0ee',
      },
      borderColor: {
        secondary: '#f39a8b',
      },
      textColor: {
        primary: '#341d74',
        secondary: '#f39a8b',
        yellow: '#ffd84b'
      },
      fontSize: {
        '1/2xl': '1.35rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
