var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Loginsinup = require('./routes/LoginSinup');
var Category = require('./routes/Category');
var Product = require('./routes/Product')
var app = express();
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/API')
    .then(() => {
        console.log("Connected successfully to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/Loginsingup', Loginsinup);
app.use('/Category', Category);
app.use ('/Product',Product)

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
