const axios = require('axios').default


const getEvents = async () => {
    return await (await axios.get('http://localhost:3000/event/all')).data
}

const getEvent = async (id) => {
    return (await axios.get('http://localhost:3000/event/' + id)).data
}

const createEvent = async (book) => {
    await axios.post('http://localhost:3000/event/create', book)
}

const editEvent = async (id, book) => {
    await axios.put('http://localhost:3000/event/' + id, book)
}

const removeEvent = async (id) => {
    await axios.delete('http://localhost:3000/event/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/event/' + offset + '/' + page)).data
}


module.exports = { getEvents, getEvent, createEvent, editEvent, removeEvent, paginate }