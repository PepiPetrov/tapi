const mongoose = require('mongoose')
const Character = require('./Character')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getCharacters() {
    return await Character.find({})
}

async function getCharacter(id) {
    return await Character.findById(id)
}

async function createCharacter(character) {
    const ch = new Character(character)
    await ch.save()
}

async function editCharacter(id, character) {
    await Character.findByIdAndUpdate(id, character)
}

async function removeCharacter(id) {
    await Character.findByIdAndRemove(id)
}

async function paginateCharacters(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Character.find({}).skip(offset * (page - 1)).limit(offset)
}

module.exports = { getCharacters, getCharacter, createCharacter, editCharacter, removeCharacter, paginateCharacters }