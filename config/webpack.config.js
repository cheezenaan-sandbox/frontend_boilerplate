const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    bundle: './src/javascripts/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  }
};
