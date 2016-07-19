const webpack = require('webpack');
const path = require('path');
const point = './client/index.js';
const build = __dirname + '/dist';
const webpackloader = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  entry: [webpackloader, point],
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

