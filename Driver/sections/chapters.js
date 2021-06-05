const axios = require('axios').default


const getChapters = async () => {
    return await (await axios.get('http://localhost:3000/chapter/all')).data
}

const getChapter = async (id) => {
    return (await axios.get('http://localhost:3000/chapter/' + id)).data
}

const createChapter = async (book) => {
    await axios.post('http://localhost:3000/chapter/create', book)
}

const editChapter = async (id, book) => {
    await axios.put('http://localhost:3000/chapter/' + id, book)
}

const removeChapter = async (id) => {
    await axios.delete('http://localhost:3000/chapter/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/chapter/' + offset + '/' + page)).data
}


module.exports = { getChapter, getChapter, createChapter, editChapter, removeChapter, paginate }