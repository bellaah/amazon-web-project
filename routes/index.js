var express = require('express');
var router = express.Router();
var pool = require('./db.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signIn', function(req, res, next) {
  res.render('signIn');
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/adminUser', function(req, res, next) {
  res.render('adminUser');
});

router.post('/checkAdmin', function(req, res, next) {
  pool.getConnection(function(err,connection){
    eval(req.body).forEach(elem => {
      connection.query(`UPDATE users SET admin = ${elem.admin} WHERE user_id = '${elem.id}'`, function (err, rows) {
        connection.release();
      });
    });
  });
});

//하단 케로셀의 data를  db에서 꺼내서 넘겨주는 API
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

// admin 페이지에 사용자 data를 넘겨주는 API
router.get('/adminUserList', function(req, res, next) {
  pool.getConnection(function(err,connection){
    connection.query('SELECT * from users', function (err, rows) {
      if (!err)
        res.send(rows);
      else
        console.log('Error while performing Query.', err);
      connection.release();
    });
  });
});


module.exports = router; 
