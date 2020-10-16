const mongoose = require('./connection')
const Beverage = require('../models/beverage')
const beverageData = require('../data-sets/prompt1/beverage-data.json')
const Penpals = require('../models/penpals')
const penpalsData = require('../data-sets/prompt2/penpals.json')
const BestEverything = require('../models/best-everything')
const bestEverythingData = require('../data-sets/prompt3/best-everything.json')

const db = mongoose.connection

Beverage.deleteMany({}).then(() => {
    Beverage.insertMany(beverageData).then(beverage => {
        console.log('beverage', beverage)
        db.close()
    })
})

Penpals.deleteMany({}).then(() => {
	Penpals.insertMany(penpalsData).then((penpals) => {
		console.log('penpals', penpals)
		db.close()
	})
})

BestEverything.deleteMany({}).then(() => {
	BestEverything.insertMany(bestEverythingData).then((best) => {
		console.log('best', best)
		db.close()
	})
})