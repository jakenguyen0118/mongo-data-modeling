const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const beverageSchema = new Schema({
	name: String,
	brand: String,
	type: String,
	sugar: Boolean,
	carbonated: Boolean,
	container: String,
})

const Beverage = mongoose.model('Beverage', beverageSchema)

module.exports = Beverage
