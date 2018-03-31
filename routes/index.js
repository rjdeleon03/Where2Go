var express = require("express");
var router = express.Router();

/* GET index page */
router.get("/", function(req, res, next) {
    res.send("SERVER ROOT");
});

module.exports = router;