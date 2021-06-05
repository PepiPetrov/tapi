const axios = require('axios').default


const getItems = async () => {
    return await (await axios.get('http://localhost:3000/item/all')).data
}

const getItem = async (id) => {
    return (await axios.get('http://localhost:3000/item/' + id)).data
}

const createItem = async (book) => {
    await axios.post('http://localhost:3000/item/create', book)
}

const editItem = async (id, book) => {
    await axios.put('http://localhost:3000/item/' + id, book)
}

const removeItem = async (id) => {
    await axios.delete('http://localhost:3000/event/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/event/' + offset + '/' + page)).data
}


module.exports = { getItems, getItem, createItem, editItem, removeItem, paginate }