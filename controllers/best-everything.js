const mongoose = require('../db/connection')
const BestEverything = require('../models/best-everything')

const db = mongoose.connection

const index = () => {
    BestEverything.find((err, best) => {
        console.log('best', best)
        db.close()
    })
}
// index()

const bestCreate = {
	year: 2019,
	sports: {
        superBowl: "New England Patriots",
        worldSeries: "Washington Nationals",
        stanleyCup: "St. Louis Blues",
        NBAchampionship: "Toronto Raptors"
    },
    music: {
        bestSong: {
            title: "Bad Guy",
            artist: "Billie Eilish"
        }
    },
    movies: {
        bestMovie: "Green Book",
        bestActress: "Olivia Colman",
        bestActor: "Rami Malek"
    }
}

const create = () => {
    BestEverything.create(bestCreate, (err, best) => {
        if (err) {
            console.log('err', err)
        } else {
            console.log('best', best)
        }
        db.close()
    })
}
// create()

const show = () => {
    BestEverything.find({year: 2017}, (err, best) => {
        if (err) {
            console.log('error', err)
        } else {
            console.log('best', best)
        }
        db.close()
    })
}
// show()

const deleteOne = () => {
    BestEverything.deleteOne({year: 2019})
        .then(deleted => console.log('deleted', deleted))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// deleteOne()

const update = () => {
    BestEverything.findOneAndUpdate({year: 2018}, {year: 3000})
        .then(updated => console.log('updated', updated))
        .catch(err => console.log('err', err))
        .finally(() => db.close())
}
// update()