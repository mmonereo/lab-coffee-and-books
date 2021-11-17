module.exports = app => {

	// Base routes
	const baseRoutes = require("./base.routes");
	app.use("/", baseRoutes);

	//Places routes
	const placesRoutes = require("./places.routes");
	app.use("/places", placesRoutes);

	//API routes
	const apiRoutes = require("./api.routes");
	app.use("/api", apiRoutes);
}
