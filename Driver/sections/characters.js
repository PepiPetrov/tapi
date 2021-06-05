const axios = require('axios').default


const getCharacters = async () => {
    return await (await axios.get('http://localhost:3000/character/all')).data
}

const getCharacter = async (id) => {
    return (await axios.get('http://localhost:3000/character/' + id)).data
}

const createCharacter = async (book) => {
    await axios.post('http://localhost:3000/character/create', book)
}

const editCharacter = async (id, book) => {
    await axios.put('http://localhost:3000/character/' + id, book)
}

const removeCharacter = async (id) => {
    await axios.delete('http://localhost:3000/book/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/character/' + offset + '/' + page)).data
}


module.exports = { getCharacters, getCharacter, createCharacter, editCharacter, removeCharacter, paginate }