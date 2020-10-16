const mongoose = require('../db/connection')
const Beverage = require('../models/beverage')

const db = mongoose.connection

const index = () => {
    Beverage.find((err, beverage) => {
        console.log('beverage', beverage)
        db.close()
    })
}
// index()

const bevCreate = {
	name: 'Mountain Dew',
	brand: 'Pepsi',
	type: 'soda',
    sugar: true,
    carbonated: true,
    container: "can"
}

const create = () => {
    Beverage.create(bevCreate, (err, beverage) => {
        if (err) {
            console.log('err', err)
        } else {
            console.log('beverage', beverage)
        }
        db.close()
    })
}
// create()

const show = () => {
    Beverage.find({name: "Mountain Dew"}, (err, beverage) => {
        if (err) {
            console.log('error', err)
        } else {
            console.log('beverage', beverage)
        }
        db.close()
    })
}
// show()

const deleteOne = () => {
    Beverage.deleteOne({name: "Mountain Dew"})
        .then(deleted => console.log('deleted', deleted))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// deleteOne()

const update = () => {
    Beverage.findOneAndUpdate({container: "can"}, {container: "bottle"})
        .then(updated => console.log('updated', updated))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// update()

