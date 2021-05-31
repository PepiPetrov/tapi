const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    from: String,
    to: String,
    people: String
})

module.exports = mongoose.model('Journey', schema)