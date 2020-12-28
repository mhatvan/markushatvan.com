module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte'],
    options: {
      whitelist: ['my-10'],
    },
  },
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        cyan: '#578786',
        secondaryTeal: '#31C9A7',
        primaryTeal: '#22AD9D',
        lightGrey: '#CFD4CC',
        darkGrey: '#40444D',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
