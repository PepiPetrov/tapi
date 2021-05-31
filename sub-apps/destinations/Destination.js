const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    mapUrl: {
        type: String,
        required: false
    },
    description: String
})

module.exports = mongoose.model('Destination', schema)