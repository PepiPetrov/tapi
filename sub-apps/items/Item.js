const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    description: String,
    ownsTo: String
})

module.exports = mongoose.model('Item', schema)