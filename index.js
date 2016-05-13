var express = require('express');
var https = require('https');
var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});