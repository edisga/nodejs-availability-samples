var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/headers', function (req, res) {
    res.send({ 'numbers': Math.random()});
});

app.get('/version', function (req, res) {
    res.send({'node-version': process.version});
});

app.listen(port, function () {
  console.log(`Server listesting on port ${port}!`);
});