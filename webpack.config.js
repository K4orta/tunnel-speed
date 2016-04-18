const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './main.js',
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: './public',
  },
  resolve: {
    extensions: ['', '.js'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
