const mongoose = require('mongoose')
const Item = require('./Item')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getItems() {
    return await Item.find({})
}

async function getItem(id) {
    return await Item.findById(id)
}

async function createItem(item) {
    const im = new Item(item)
    await im.save()
}

async function editItem(id, item) {
    await Item.findByIdAndUpdate(id, item)
}

async function paginateItems(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Item.find({}).skip(offset * (page - 1)).limit(offset)
}

async function removeItem(id) {
    await models.Item.findByIdAndRemove(id)
}

module.exports = { getItems, getItem, createItem, editItem, removeItem, paginateItems }