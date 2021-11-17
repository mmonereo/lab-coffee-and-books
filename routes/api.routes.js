const router = require("express").Router();
const Place = require("../models/Place.model");

router.get("/", (req, res, next) => {
	Place.find()
		.then(places => res.status(200).json({ allPlaces: places }))
});

router.get("/:id", (req, res, next) => {
	Place.findById(req.params.id)
		.then((place) => {
			res.status(200).json({ onePlace: place })
		});
});

module.exports = router;