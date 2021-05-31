const Book = require('./Book')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getBooks() {
    return await Book.find({})
}

async function getBook(id) {
    return await Book.findById(id)
}

async function createBook(book) {
    const bk = new Book(book)
    await bk.save()
}

async function editBook(id, book) {
    await Book.findByIdAndUpdate(id, book)
}

async function removeBook(id) {
    await Book.findByIdAndRemove(id)
}

async function paginateBooks(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Book.find({}).skip(offset * ((page - 1) < 0 ? 0 : (page - 1))).limit(offset)
}

module.exports = { getBooks, getBook, createBook, editBook, removeBook, paginateBooks }