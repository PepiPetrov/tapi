const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    dialog: {
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: "Movie",
        required: false
    },
    character: {
        type: mongoose.Types.ObjectId,
        ref: "Character",
        required: false
    }
})

module.exports = mongoose.model('Quote', schema)