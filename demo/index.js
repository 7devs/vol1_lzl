var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res, next) {
  res.send('index');
  next();
});

app.post('/test', function(req, res, next) {
  res.status(200).send({
    method: 'POST',
    path: req.path,
    body: req.body,
    query: req.query
  });
  next();
});

app.get('/test', function(req, res, next) {
  res.send('test.');
  next();
});

app.delete('/user/:id', function(req, res, next) {
  if (req.query.admin === '1') {
    console.log('success');
    res.status(200).end();
  } else {
    console.log('failed');
    res.status(403).end();
  }
});

app.get('/user/:name', function(req, res, next) {
  res.send({
    user: req.params.name
  });
});

app.listen(3000, function() {
  console.log('demo running...');
});
