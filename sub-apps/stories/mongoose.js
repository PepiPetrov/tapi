const mongoose = require('mongoose')
const Story = require('./Story')

mongoose.connect('mongodb://localhost/lrapi', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

async function getStories() {
    return await Story.find({})
}

async function getStory(id) {
    return await Story.findById(id)
}

async function createStory(story) {
    const st = new Story(story)
    await st.save()
}

async function editStory(id, story) {
    await Story.findByIdAndUpdate(id, story)
}

async function paginateStories(offset, page) {
    offset = Number(offset)
    page = Number(page)
    if (page == 0) {
        page = 1
    }
    return await Story.find({}).skip(offset * (page - 1)).limit(offset)
}

async function removeStory(id) {
    await Story.findByIdAndRemove(id)
}

module.exports = { getStories, getStory, createStory, editStory, removeStory, paginateStories }