const express = require('express');
const app = express();
const path = require('path');
const assetPath = path.join(__dirname, './client', 'index.html');
const jsPath = path.resolve(__dirname) + '/dist';

app.listen(3000, function () {
  console.log('port: 3000');
});

app.use(express.static(jsPath));

app.get('*', function(req, res) {
  res.sendFile(assetPath);
});
