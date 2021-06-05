const axios = require('axios').default


const getDestinations = async () => {
    return await (await axios.get('http://localhost:3000/destination/all')).data
}

const getDestination = async (id) => {
    return (await axios.get('http://localhost:3000/destination/' + id)).data
}

const createDestination = async (book) => {
    await axios.post('http://localhost:3000/destination/create', book)
}

const editDestination = async (id, book) => {
    await axios.put('http://localhost:3000/destination/' + id, book)
}

const removeDestination = async (id) => {
    await axios.delete('http://localhost:3000/destination/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/destination/' + offset + '/' + page)).data
}


module.exports = { getDestinations, getDestination, createDestination, editDestination, removeDestination, paginate }