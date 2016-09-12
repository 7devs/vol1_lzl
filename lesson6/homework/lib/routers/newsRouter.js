var r = require('express').Router();
var newsModal = require('../models/news');

r.route('/')
  .get(function(req, res, next) {
    res.status(200).send(newsModal);
  });

r.route('/:id')
  .get(function(req, res, next) {
    var id = req.params.id - 1;
    var news = newsModal[id];
    if (news) {
      res.status(200).send(news);
    } else {
      res.status(404).send('数据不存在');
    }
  })
  .delete(function (req, res, next) {
    var id = req.params.id - 1;
    var news = newsModal[id];
    if (news) {
      newsModal.splice(id, 1);
      // res.status(200).send(newsModal);
      console.log(newsModal);
      res.status(200).end();
    } else {
      res.status(404).send('数据不存在');
    }
  });

module.exports = r;
