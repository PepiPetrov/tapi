const axios = require('axios').default


const getMovies = async () => {
    return await (await axios.get('http://localhost:3000/movie/all')).data
}

const getMovie = async (id) => {
    return (await axios.get('http://localhost:3000/movie/' + id)).data
}

const createMovie = async (book) => {
    await axios.post('http://localhost:3000/movie/create', book)
}

const editMovie = async (id, book) => {
    await axios.put('http://localhost:3000/movie/' + id, book)
}

const removeMovie = async (id) => {
    await axios.delete('http://localhost:3000/movie/' + id)
}

const paginate = async (page, offset) => {
    return await (await axios.get('http://localhost:3000/movie/' + offset + '/' + page)).data
}


module.exports = { getMovies, getMovie, createMovie, editMovie, removeMovie, paginate }