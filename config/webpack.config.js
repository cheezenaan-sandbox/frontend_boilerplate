const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{ test: /.ts$/, loader: 'ts-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    })
  ],
  devtool: isProduction ? 'eval' : 'cheap-module-source-map'
};
