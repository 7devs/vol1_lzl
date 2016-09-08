var r = require('express').Router();
var users = require('../models/users');

r.route('/:id')
  .get(function(req, res, next) {
    var id = req.params.id;
    var user = users[id];
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send('数据不存在');
    }
  })

module.exports = r;
