var express     = require("express");
var path        = require("path");
var favicon     = require("serve-favicon");
var logger      = require("morgan");
var bodyParser  = require("body-parser");

// var bookRoute = require("./routes/book");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use(express.static(path.join(__dirname, "dist")));

// app.use("/book", bookRoute);

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