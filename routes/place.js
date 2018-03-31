var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Place = require("../models/place")

// Get all places
router.get("/", function(req, res, next) {
    Place.find(function(err, places) {
        if (err) {
            return res.status(404).send(err);
        }
        res.json(places);
    });
});

// Get single place by id
router.get("/:id", function(req, res, next) {
    var id = req.params.id;
    Place.findById(id, function(err, place) {
        if (err) {
            return res.status(404).send(err);
        }
        res.json(place);
    });
});

// Save place
router.post("/", function(req, res, next) {
    Place.create(req.body, function(err, newPlace) {        
        if (err) {
            return res.status(500).send(err);
        }
        res.json(newPlace);
    });
});

// Update place
router.put("/:id", function(req, res, next) {
    var id = req.params.id;
    var body = req.body;
    Place.findByIdAndUpdate(id, body, function(err, updatedPlace) {
        if (err) {
            return res.status(404).send(err);
        }
        res.json(updatedPlace);
    });
});

// Delete place
router.delete("/:id", function(req, res, next) {
    Place.findByIdAndRemove(function(err, removedPlace) {
        if (err) {
            return res.status(404).send(err);
        }
        res.json(removedPlace)
    });
});

module.exports = router;