const axios = require('axios').default


const getStories = async () => {
    return await (await axios.get('http://localhost:3000/story/all')).data
}

const getStory = async (id) => {
    return (await axios.get('http://localhost:3000/story/' + id)).data
}

const createStory = async (book) => {
    await axios.post('http://localhost:3000/story/create', book)
}

const editStory = async (id, book) => {
    await axios.put('http://localhost:3000/story/' + id, book)
}

const removeStory = async (id) => {
    await axios.delete('http://localhost:3000/story/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/story/' + offset + '/' + page)).data
}


module.exports = { getStories, getStory, createStory, editStory, removeStory, paginate }