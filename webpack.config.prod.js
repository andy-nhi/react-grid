const webpack = require('webpack');
const path = require('path');
const point = './client/index.js';
const build = __dirname + '/dist';

module.exports = {
  entry: [point],
  output: {
    path: build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: ['style-loader!css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

