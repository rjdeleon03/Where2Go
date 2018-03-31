var express = require("express");
var router = express.Router();

// Get all places
router.get("/", function(req, res, next) {
    res.send("PLACE ROUTES INDEX");
});

module.exports = router;