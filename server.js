var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./app/config');
var Address = require('./app/models/address');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/address', function(req, res) {
  var newAddr = new Address({ address: req.body.data.address });
  newAddr.save(function(err) {
    if (err) console.error(err.message);
  });
  res.status(200).send(newAddr);
});
app.get('/address', function(req, res) {
  Address.find({}).exec(function(err, addresses) {
    if (err) console.error(err.message);
    res.status(200).send(addresses);
  });
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log('Listening on port', port);
});