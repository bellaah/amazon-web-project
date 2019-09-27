var createError     = require('http-errors');
var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var sassMiddleware  = require('node-sass-middleware');
var indexRouter     = require('./routes/index');
var adminRouter     = require('./routes/admin');
var db              = require('./routes/db');
var app             = express();
var flash           = require('connect-flash');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public/stylesheets/scss'),
  dest: path.join(__dirname, 'public/stylesheets/css'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
  response: true,
  outputStyle: 'compressed',
  prefix: '/style',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
