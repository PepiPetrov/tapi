const axios = require('axios').default


const getBooks = async () => {
    return await (await axios.get('http://localhost:3000/book/all')).data
}

const getBook = async (id) => {
    return (await axios.get('http://localhost:3000/book/' + id)).data
}

const createBook = async (book) => {
    await axios.post('http://localhost:3000/book/create', book)
}

const editBook = async (id, book) => {
    await axios.put('http://localhost:3000/book/' + id, book)
}

const removeBook = async (id) => {
    await axios.delete('http://localhost:3000/book/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/book/' + offset + '/' + page)).data
}


module.exports = { getBooks, getBook, createBook, editBook, removeBook, paginate }