var express = require('express');
var router = express.Router();
var pool = require('./db.js');
var fs = require('fs');
var multer = require('multer')
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

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/adminUser', function(req, res, next) {
  res.render('adminUser');
});

router.post('/removeItem', function(req, res, next) {
  pool.getConnection(function(err,connection){
      connection.query(`DELETE FROM main_list WHERE seq = ${parseInt(req.body.seq)}`, function (err, rows) {
        connection.release();
      });
    res.send("success");
  });
});

router.post('/checkAdmin', function(req, res, next) {
  pool.getConnection(function(err,connection){
    eval(req.body).forEach(elem => {
      connection.query(`UPDATE users SET admin = ${elem.admin} WHERE user_id = '${elem.id}'`, function (err, rows) {
        connection.release();
      });
    });
    res.send("success");
  });
});

router.post('/addItem', function(req, res, next) {
  console.log(req.body);
  // let form = new multiparty.Form();
  // form.on('part', function(part) {
  //   if (!part.filename) {
  //     console.log('got field named ' + part.name);
  //     part.resume();
  //   }
  // });
  

  // // fs.writeFile('text1.txt', data, 'utf8', function(error){
  // //    console.log('write end') 
  // //   });
  // pool.getConnection(function(err,connection){
    
  //   res.send("success");
  // });
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