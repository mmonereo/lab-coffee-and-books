const router = require("express").Router();
const Place = require("../models/Place.model");

router.get("/create", (req, res, next) => {
	res.render("places/create-place");
});

router.post("/create", (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

	let createInfo = {
		name: req.body.name,
		type: req.body.type,
		location: location
	}
	
	Place.create(createInfo)
		.then(res.redirect("/places/"))
});

router.get("/", (req, res, next) => {
	Place.find()
		.then(places => res.render("places/all-places", { places }))
});

router.get("/:id", (req, res, next) => {
	Place.findById(req.params.id)
		.then((place) =>{
			const isCoffee = place.type === "coffee shop";
			res.render("places/details-place", {place, isCoffee} )
		});
});

router.post("/:id/delete", (req, res, next) => {
	Place.findByIdAndDelete(req.params.id)
		.then(res.redirect(`/places/`))
});

router.get("/:id/edit", (req, res, next) => {
	Place.findById(req.params.id)
		.then((place) => {
			const isCoffee = place.type === "coffee shop";
			res.render("places/edit-place", { place, isCoffee })
		});
});

router.post("/:id/edit", (req, res, next) => {
	
	const {name, type} = req.body;
	const {latitude, longitude} = req.body;
	const location = {
		type: 'Point',
		coordinates: [longitude, latitude]
	}

	Place.findByIdAndUpdate(req.params.id, { name, type, location }, { new: true })
		.then((place) => {
			console.log(place);
			res.redirect(`/places/${req.params.id}`)
		});
});


module.exports = router;