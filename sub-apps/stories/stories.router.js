const app = require('express').Router()
const db = require('./mongoose')

app.get('/story/all', async (req, res) => {
    const result = await db.getStories()
    res.json(result)
})

app.get('/story/:id', async (req, res) => {
    const result = await db.getStory(req.params.id)
    res.json(result)
})

app.post('/story/create', async (req, res) => {
    res.status(201)
    await db.createStory(req.body)
    res.json({ ok: true })
})

app.put('/story/:id', async (req, res) => {
    res.status(201)
    await db.editStory(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/story/:id', async (req, res) => {
    res.status(200)
    await db.removeStory(req.params.id)
    res.json({ ok: true })
})

app.get('/story/:offset/:page', async (req, res) => {
    const result = await db.paginateStories(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app