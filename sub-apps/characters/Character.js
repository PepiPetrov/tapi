const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    isEvil: Boolean,
    destinationFrom: String,
    gender: String,
    race: String,
    hair: String,
    birth: String || Number || null,
    death: String || Number || null,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
})


module.exports = mongoose.model('Character', schema)