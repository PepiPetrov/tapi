const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    date: String,
    description: String,
    image: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('Event', schema)