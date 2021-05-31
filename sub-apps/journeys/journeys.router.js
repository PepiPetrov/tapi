const app = require('express').Router()
const db = require('./mongoose')

app.get('/journies/all', async (req, res) => {
    const result = await db.getJournies()
    res.json(result)
})

app.get('/journey/:id', async (req, res) => {
    const result = await db.getJourney(req.params.id)
    res.json(result)
})

app.post('/journey/create', async (req, res) => {
    res.status(201)
    await db.createJourney(req.body)
    res.json({ ok: true })
})

app.put('/journey/:id', async (req, res) => {
    res.status(201)
    await db.editJourney(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/journey/:id', async (req, res) => {
    res.status(200)
    await db.removeJourney(req.params.id)
    res.json({ ok: true })
})

app.get('/journey/:offset/:page', async (req, res) => {
    const result = await db.paginateJournies(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app