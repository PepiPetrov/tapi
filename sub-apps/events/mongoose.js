const mongoose = require('mongoose')
const Event = require('./Event')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getEvents() {
    return await Event.find({})
}

async function getEvent(id) {
    return await Event.findById(id)
}

async function createEvent(event) {
    const ev = new Event(event)
    await ev.save()
}

async function editEvent(id, event) {
    await models.Event.findByIdAndUpdate(id, event)
}

async function paginateEvents(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await models.Event.find({}).skip(offset * (page - 1)).limit(offset)
}

async function removeEvent(id) {
    await models.Event.findByIdAndRemove(id)
}

module.exports = { getEvents, getEvent, createEvent, editEvent, removeEvent, paginateEvents }