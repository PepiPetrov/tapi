const axios = require('axios').default


const getJourneys = async () => {
    return await (await axios.get('http://localhost:3000/journey/all')).data
}

const getJourney = async (id) => {
    return (await axios.get('http://localhost:3000/journey/' + id)).data
}

const createJourney = async (book) => {
    await axios.post('http://localhost:3000/journey/create', book)
}

const editJourney = async (id, book) => {
    await axios.put('http://localhost:3000/journey/' + id, book)
}

const removeJourney = async (id) => {
    await axios.delete('http://localhost:3000/journey/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/journey/' + offset + '/' + page)).data
}


module.exports = { getJourneys, getJourney, createJourney, editJourney, removeJourney, paginate }