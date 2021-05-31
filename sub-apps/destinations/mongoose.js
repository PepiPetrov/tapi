const mongoose = require('mongoose')
const Destination = require('./Destination')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getDestinations() {
    return await Destination.find({})
}

async function getDestination(id) {
    return await Destination.findById(id)
}

async function createDestination(destination) {
    const dn = new Destination(destination)
    await dn.save()
}

async function editDestination(id, destination) {
    await Destination.findByIdAndUpdate(id, destination)
}

async function removeDestination(id) {
    await Destination.findByIdAndRemove(id)
}

async function paginateDestinations(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Destination.find({}).skip(offset * (page - 1)).limit(offset)
}

module.exports = { getDestinations, getDestination, createDestination, editDestination, removeDestination, paginateDestinations }