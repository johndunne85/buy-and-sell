const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/buy-and-sell'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+
  '/dist/buy-and-sell/index.html'));
});
app.listen(process.env.POST || 8080);
