const express = require('express');
const app = express();
const path = require('path');
const assetPath = path.join(__dirname, './client', 'index.html');

app.listen(3000, function () {
  console.log('node:', process.env.NODE_ENV);
  console.log('port: 3000');
});

if (process.env.NODE_ENV === 'production'){
  const jsPath = path.resolve(__dirname) + '/dist';
  app.use(express.static(jsPath));
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config.dev.js');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function(req, res) {
  res.sendFile(assetPath);
});
