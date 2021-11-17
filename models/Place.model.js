const { Schema, model } = require("mongoose");


placeSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	type: {
		type: String,
		enum: ["coffee shop", "bookstore"],
	},
	location: {
		type: {
			type: String
		},
		coordinates: [Number]
	}
	
}, { timestamps: true })

placeSchema.index({ location: '2dsphere' });
const Place = model("Place", placeSchema);

module.exports = Place;