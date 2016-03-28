var express = require('express');
var bodyParser = require('body-parser');

// modules
var hellobot = require('./hellobot');

var app = express();
var port = process.env.port || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.get('/', (req,res) => {
  res.status(200).send('Hello world!');
});

// post
app.post('/hello', hellobot);

// errors
app.use(function (err,req,res,next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function() {
  console.log('Slack bot listening on port ' + port);
});
