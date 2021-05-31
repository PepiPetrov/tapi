const mongoose = require('mongoose')
const Chapter = require('./Chapter')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getChapters() {
    return await Chapter.find({})
}

async function getChapter(id) {
    return await Chapter.findById(id)
}

async function createChapter(chapter) {
    const ch = new Chapter(chapter)
    await ch.save()
}

async function editChapter(id, chapter) {
    await Chapter.findByIdAndUpdate(id, chapter)
}

async function removeChapter(id) {
    await Chapter.findByIdAndRemove(id)
}

async function paginateChapters(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Chapter.find({}).skip(offset * (page - 1)).limit(offset)
}

module.exports = { getChapters, getChapter, createChapter, editChapter, removeChapter, paginateChapters }

