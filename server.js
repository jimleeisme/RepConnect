var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./app/config');
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log('Listening on port', port);
});