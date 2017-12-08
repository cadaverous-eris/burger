var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
	burger.all(data => {
		res.render("index", {burgers: data});
	});
});

router.post("/api/burgers", function(req, res) {
	burger.create(req.body, result => {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	burger.update(req.body, {id: req.params.id}, result => {
		if (result.changedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;