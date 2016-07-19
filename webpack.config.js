const webpack = require('webpack');
const path = require('path');
const point = './client/index.js';
const build = __dirname + '/dist';

module.exports = {
  entry: point,
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

