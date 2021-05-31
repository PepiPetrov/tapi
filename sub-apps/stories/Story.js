const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    content: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
})

module.exports = mongoose.model('Story', schema)