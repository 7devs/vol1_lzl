var r = require('express').Router();
var newsModal = require('../models/news');

r.route('/')
  .get(function(req, res, next) {
    res.status(200).send(newsModal);
  });

r.route('/:id')
  .get(function(req, res, next) {
    var id = req.params.id;
    var news = newsModal[id];
    if (news) {
      res.status(200).send(news);
    } else {
      res.status(404).send('数据不存在');
    }
    next();
  })
  .delete(function (req, res, next) {
    var id = req.params.id;
    var news = newsModal[id];
    if (news) {
      delete newsModal[id];
      res.status(200).send(newsModal);
    } else {
      res.status(404).send('数据不存在');
    }
    next();
  });

module.exports = r;
