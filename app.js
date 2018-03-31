var express     = require("express");
var path        = require("path");
var favicon     = require("serve-favicon");
var logger      = require("morgan");
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

var indexRoutes = require("./routes/index");
var placeRoutes = require("./routes/place");
var app = express();

// Setup database
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/where2go", {
        promiseLibrary: require("bluebird")
    })
    .then(() => console.log("MongoDB connection successful!"))
    .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/places", placeRoutes);
app.use("/", indexRoutes);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500).send(err);
});
  
module.exports = app;