const app = require('express').Router()
const db = require('./mongoose')

app.get('/chapter/all', async (req, res) => {
    const result = await db.getChapters()
    res.json(result)
})

app.get('/chapter/:id', async (req, res) => {
    const result = await db.getChapter(req.params.id)
    res.json(result)
})

app.post('/chapter/create', async (req, res) => {
    res.status(201)
    await db.createChapter(req.body)
    res.json({ ok: true })
})

app.put('/chapter/:id', async (req, res) => {
    res.status(201)
    await db.editChapter(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/chapter/:id', async (req, res) => {
    res.status(200)
    await db.removeChapter(req.params.id)
    res.json({ ok: true })
})

app.get('/chapter/:offset/:page', async (req, res) => {
    const result = await db.paginateChapters(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app