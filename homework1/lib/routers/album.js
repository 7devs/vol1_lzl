var r = require('express').Router();
var albums = require('../models/albums');

r.route('/')
  .get(function(req, res, next) {
    res.status(200).send(albums);
  });

r.route('/longerSong')
  .get(function(req, res, next) {
    var filterAlbums = albums.filter(function(album) {
      return (album.length / 60) > 3;
    });
    res.status(200).send(filterAlbums);
  });

r.route('/singer/:name')
  .get(function(req, res, next) {
    var filterAlbums = albums.filter(function(album) {
      return album.singer === req.params.name;
    });
    if (filterAlbums.length !== 0) {
      res.status(200).send(filterAlbums);
    } else {
      res.status(404).send('Not Found');
    }
  });

r.route('/search')
  .get(function(req, res, next) {
    var type = req.query.type;
    if (type) {
      var filterAlbums = albums.filter(function(album) {
        return album.type === type;
      })
      if (filterAlbums.length !== 0) {
        res.status(200).send(filterAlbums);
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
    var album = albums[id];
    if (album) {
      res.status(200).send(album);
    } else {
      res.status(404).send('Not Found');
    }
  })
  .put(function(req, res, next) {
    var id = req.params.id - 1;
    var album = albums[id];
    if (album) {
      var length = parseInt(req.body.length);
      var title = req.body.title;
      if (length && title) {
        album.length = length;
        album.title = title;
      }
      res.status(200).send(album);
    } else {
      res.status(404).send('Not Found');
    }
  });

module.exports = r;
