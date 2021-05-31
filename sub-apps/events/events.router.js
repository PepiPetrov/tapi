const app = require('express').Router()
const db = require('./mongoose')

app.get('/event/all', async (req, res) => {
    const result = await db.getEvents()
    res.json(result)
})

app.get('/event/:id', async (req, res) => {
    const result = await db.getEvent(req.params.id)
    res.json(result)
})

app.post('/event/create', async (req, res) => {
    res.status(201)
    await db.createEvent(req.body)
    res.json({ ok: true })
})

app.put('/event/:id', async (req, res) => {
    res.status(201)
    await db.editEvent(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/event/:id', async (req, res) => {
    res.status(200)
    await db.removeEvent(req.params.id)
    res.json({ ok: true })
})

app.get('/event/:offset/:page', async (req, res) => {
    const result = await db.paginateEvents(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app