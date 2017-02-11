/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-spacing-variables.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ],

  'postcss-cssnext': {
    features: {
      customProperties: {
        preserve: true
      }
    }
  }
};
