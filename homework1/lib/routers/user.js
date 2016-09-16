var r = require('express').Router();
var users = require('../models/users');

r.route('/')
  .get(function(req, res, next) {
    res.status(200).send(users);
  });

r.route('/ageAvg')
  .get(function(req, res, next) {
    var totalAge = users.reduce(function(pv, cv) {
      return pv + cv.age;
    }, 0);
    var ageAvg = (totalAge / users.length).toString(); // 坑1：需要转为字符串
    res.status(200).send(ageAvg);
  });

r.route('/search')
  .get(function(req, res, next) {
    var company = req.query.company;
    if (company) {
      var filterUsers = users.filter(function(user) {
        var userCompany = (user.company).toLowerCase();
        var inputCompany = company.toLowerCase();
        return userCompany.indexOf(inputCompany) !== -1;
      })
      if (filterUsers.length !== 0) {
        res.status(200).send(filterUsers);
      } else {
        res.status(404).send('Not Found');
      }
    } else {
      res.status(404).send('Not Found');
    }
  });

r.route('/:id')
  .get(function(req, res, next) {
    var id = req.params.id - 1;
    var user = users[id];
    if (user) {
      var username = user.firstName + ' ' + user.lastName;
      res.status(200).send(username);
    } else {
      res.status(404).send('Not Found');
    }
  })
  .put(function(req, res, next) {
    var id = req.params.id - 1;
    var user = users[id];
    if (user) {
      var age = parseInt(req.body.age); // 坑2：PUT 命令里的参数在 body 里面
      if (age && age > 0) {
        user.age = age;
        res.status(200).send(user);
      } else {
        console.log('ERROR: Age need to be a positive number.');
        res.status(200).end();
      }
    } else {
      res.status(404).send('Not Found');
    }
  });

r.route('/count/:sex')
  .get(function(req, res, next) {
    var sex = req.params.sex;
    if (sex === 'male' || sex === 'female') {
      var filterUsers = users.filter(function(user) {
        return user.sex === sex;
      });
      var count = filterUsers.length.toString();
      res.status(200).send(count);
    } else {
      res.status(404).send('Not Found');
    }
  });

module.exports = r;
