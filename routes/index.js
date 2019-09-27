var express = require('express');
var router = express.Router();
var pool = require('./db.js');
const crypto = require('crypto');
var session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.use(session(
  {
      secret: 'secret_key',
      cookie: {
        secure: false
      },
      saveUninitialized: false, 
      resave: false 
  }
));
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("serializeUser", user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log("deserializeUser", user.id);
  done(null , user);
});

passport.use(new LocalStrategy(
  {
    usernameField: 'id',
    passwordField: 'password'
  },function(username, password, done) {
    console.log("local", username, password);
    password = crypto.createHash('sha512').update(password).digest('base64');
    pool.getConnection(function(err,connection){
        connection.query(`SELECT * from users WHERE user_id = '${username}' AND password = '${password}';`, function (err, rows) {
          connection.release();
          console.log(rows);
          if(rows.length === 0){
            return done(null, false, { message: '아이디와 비밀번호를 확인해주세요.' });
          }else{
            return done(null,{ "id" :username, "admin" :rows[0].admin});
          }
        });
    });
  }
));

router.post('/user/signIn',
  passport.authenticate('local', { 
    successRedirect: '/',        
    failureRedirect: '/signIn'
  })
);


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/signIn', function(req, res, next) {
  res.render('signIn');
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.get('/logOut', function(req, res, next) {
  req.logOut();
  res.clearCookie('connect.sid');
  req.session.save(function(){
    res.redirect('/');
  });
});

router.get('/checkSession', function(req, res, next) {
  res.send(req.isAuthenticated());
});

router.all('/mainCarouselList', function(req, res, next) {
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
      res.redirect('/');
      connection.release();
    });
  });
});


module.exports = router; 