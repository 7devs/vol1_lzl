var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/user', require('./lib/routers/user'));
app.use('/album', require('./lib/routers/album'));

app.use('/*', function(req, res, next) {
  res.status(404).send('Not Found.');
});

app.listen(3000, function() {
  console.log('This is my first homework.');
});
