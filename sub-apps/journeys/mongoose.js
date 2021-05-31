const mongoose = require('mongoose')
const Journey = require('./Journey')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getJourneys() {
    return await Journey.find({})
}

async function getJourney(id) {
    return await Journey.findById(id)
}

async function createJourney(journey) {
    const jr = new Journey(journey)
    await jr.save()
}

async function editJourney(id, journey) {
    await Journey.findByIdAndUpdate(id, journey)
}

async function paginateJourneys(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Journey.find({}).skip(offset * (page - 1)).limit(offset)
}


async function removeJourney(id) {
    await Journey.findByIdAndRemove(id)
}


module.exports = { getJourneys, getJourney, createJourney, editJourney, removeJourney, paginateJourneys }
