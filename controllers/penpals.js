const mongoose = require('../db/connection')
const Penpals = require('../models/penpals')

const db = mongoose.connection

const index = () => {
    Penpals.find((err, penpals) => {
        console.log('penpals', penpals)
        db.close()
    })
}
// index()

const penCreate = {
	to: 'Joe',
	from: 'Jake',
	message: 'You are a great instructor!',
	sentOn: Date.now()
}

const create = () => {
    Penpals.create(penCreate, (error, penpal) => {
        if (error) {
            console.log('error', error)
        } else {
            console.log('penpal', penpal)
        }
        db.close()
    })
}
// create()

const show = () => {
    Penpals.find({to: "Ron"}, (err, penpal) => {
        if (err) {
            console.log('error', err)
        } else {
            console.log('penpal', penpal)
        }
        db.close()
    })
}
// show()

const deleteOne = () => {
    Penpals.deleteOne({to: "Joe"})
        .then(deleted => console.log('deleted', deleted))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// deleteOne()

const update = () => {
    Penpals.findOneAndUpdate({to: "Leslie"}, {from: "Jake"})
        .then(updated => console.log('updated', updated))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// update()