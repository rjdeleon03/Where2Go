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
var databaseUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/where2go";
mongoose.Promise = require("bluebird");
mongoose.connect(databaseUrl, {
        promiseLibrary: require("bluebird")
    })
    .then(() => console.log("MongoDB connection successful!"))
    .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));

// Construct and use path to Angular page
var angularDist = __dirname + "/dist/";
app.use(express.static(angularDist));

app.use("/api/places", placeRoutes);

// Always render Angular page
app.use("*", express.static(angularDist));

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500).send(err);
});
  
module.exports = app;