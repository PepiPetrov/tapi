const axios = require('axios').default


const getQuotes = async () => {
    return await (await axios.get('http://localhost:3000/quote/all')).data
}

const getQuote = async (id) => {
    return (await axios.get('http://localhost:3000/quote/' + id)).data
}

const createQuote = async (book) => {
    await axios.post('http://localhost:3000/quote/create', book)
}

const editQuote = async (id, book) => {
    await axios.put('http://localhost:3000/quote/' + id, book)
}

const removeQuote = async (id) => {
    await axios.delete('http://localhost:3000/quote/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/quote/' + offset + '/' + page)).data
}


module.exports = { getQuotes, getQuote, createQuote, editQuote, removeQuote, paginate }