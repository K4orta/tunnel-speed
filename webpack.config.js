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
    extensions: ['', '.js', '.json'],
    alias: {
      webworkify: 'webworkify-webpack',
    },
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
        test: /render[\/\\]painter[\/\\]use_program\.js$/,
        loader: 'transform/cacheable',
        query: 'brfs',
      },
      {
        test: /[\/\\]webworkify[\/\\]index.js\.js$/,
        loader: 'worker',
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
