const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const penpalsSchema = new Schema(
    {
        to: String,
        from: String,
        message: String,
        sentOn: Date
    }
)

const Penpals = mongoose.model('Penpals', penpalsSchema)

module.exports = Penpals