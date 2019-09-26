var express = require('express');
var router = express.Router();
var pool = require('./db.js');
const crypto = require('crypto');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signIn', function(req, res, next) {
  res.render('signIn');
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.get('/MainCarouselList', function(req, res, next) {
  pool.getConnection(function(err,connection){
    connection.query('SELECT * from main_list', function (err, rows) {
      if (!err)
        res.send(rows);
      else
        console.log('Error while performing Query.', err);
      connection.release();
    });
  });
});

router.post('/submitSignup', function(req, res, next) {
  req.body.password = crypto.createHash('sha512').update(req.body.password).digest('base64');
  pool.getConnection(function(err,connection){
    connection.query(`INSERT INTO users VALUES ('${req.body.id}','${req.body.name}','${req.body.password}',0);`, function (err, rows) {
      console.log(req.body);
      res.redirect('/');
      connection.release();
    });
  });
});

module.exports = router; 