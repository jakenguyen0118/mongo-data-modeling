const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const bestSchema = new Schema(
    {
        year: Number,
        sports: {
            superBowl: String,
            worldSeries: String,
            stanleyCup: String,
            NBAchampionship: String,
        },
        music: {
            bestSong: {
                title: String,
                artist: String,
            }
        },
        movies: {
            bestMovie: String,
            bestActress: String,
            bestActor: String
        }
    }
)

const BestEverything = mongoose.model('BestEverything', bestSchema)

module.exports = BestEverything