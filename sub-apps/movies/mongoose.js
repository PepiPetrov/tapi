const mongoose = require('mongoose')
const Movie = require('./Movie')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getMovies() {
    return await Movie.find({})
}

async function getMovie(id) {
    return await Movie.findById(id)
}

async function createMovie(movie) {
    const mv = new Movie(movie)
    await mv.save()
}

async function editMovie(id, movie) {
    await Movie.findByIdAndUpdate(id, movie)
}

async function paginateMovies(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Movie.find({}).skip(offset * (page - 1)).limit(offset)
}

async function removeMovie(id) {
    await Movie.findByIdAndRemove(id)
}

module.exports = { getMovies, getMovie, createMovie, editMovie, removeMovie, paginateMovies }