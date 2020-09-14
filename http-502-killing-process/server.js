const express = require('express');
const app = express();
port = process.env.PORT || 3000;
var fs = require('fs');

app.get('/', (req, res) => { 
  res.send('Homepage! Hello world.');
});

//Causing http 502 
app.get('/end', (req, res) => {
  process.exit(1);
});

//Causing http 502  and throwing an uncaught exception
app.get('/end2', (req, res) => {
  process.nextTick(function () {
    throw new Error;
  });
});

app.listen(port, function () {
  console.log(`Server listesting on port ${port}!`);
});

process.on('unhandledRejection', (reason, p) => {
  var message = reason +  ' - Unhandled Rejection at Promise: ' + p;
  console.log(message);
});

process.on('uncaughtException', function (err) {
  var message = (new Date).toUTCString() + ' uncaughtException:' + err.message + ' stack: ' + err.stack;
  console.log(message);
  process.exit(1);
});
