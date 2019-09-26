var express = require('express');
var router = express.Router();
var pool = require('./db.js');
var fs = require('fs');
var multer = require('multer')
const crypto = require('crypto');
console.log(crypto.createHash('sha512').update("1111").digest('base64'));

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

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/static_root/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});

router.post('/addItem', upload.single('image'), (req, res) => {
  pool.getConnection(function(err,connection){
    connection.query(`INSERT INTO main_list (image,keyword,title,description,tail,link,category) 
    VALUES ('../../static_root/${req.file.originalname}','${req.body.keyword}','${req.body.title}','${req.body.description}',
    '${req.body.tail}','${req.body.link}','${req.body.category}')`, function (err, rows) {
      if(err)
        console.log(err);
      connection.release();
    });
  });
  res.redirect('/admin');
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