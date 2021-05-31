const mongoose = require('mongoose')
const Quote = require('./Quote')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getQuotes() {
    return await Quote.find({})
}

async function getQuote(id) {
    return await Quote.findById(id)
}

async function createQuote(quote) {
    const qt = new Quote(quote)
    await qt.save()
}

async function editQuote(id, quote) {
    await Quote.findByIdAndUpdate(id, quote)
}

async function paginateQuotes(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Quote.find({}).skip(offset * (page - 1)).limit(offset)
}

async function removeQuote(id) {
    await Quote.findByIdAndRemove(id)
}

module.exports = { getQuotes, getQuote, createQuote, editQuote, removeQuote, paginateQuotes }