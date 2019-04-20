var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Defining the routes for the program
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var gamesRouter = require('./routes/games');
var loginRouter = require('./routes/login');
var loginActionRouter = require('./routes/loginAction');
var registerRouter = require('./routes/register');
var registerActionRouter = require('./routes/registerAction');
var countdownRouter = require('./routes/countdown');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Using the routes
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/games', gamesRouter);
app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/users', usersRouter);
app.use('/loginAction', loginActionRouter);
app.use('/registerAction', registerActionRouter);
app.use('/countdown', countdownRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
