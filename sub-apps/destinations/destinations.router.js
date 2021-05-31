const app = require('express').Router()
const db = require('./mongoose')

app.get('/destinations/all', async (req, res) => {
    const result = await db.getDestinations()
    res.json(result)
})

app.get('/destination/:id', async (req, res) => {
    const result = await db.getDestination(req.params.id)
    res.json(result)
})

app.post('/destination/create', async (req, res) => {
    res.status(201)
    await db.createDestination(req.body)
    res.json({ ok: true })
})

app.put('/destination/:id', async (req, res) => {
    res.status(201)
    await db.editDestination(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/destination/:id', async (req, res) => {
    res.status(200)
    await db.removeDestination(req.params.id)
    res.json({ ok: true })
})

app.get('/destination/:offset/:page', async (req, res) => {
    const result = await db.paginateDestinations(req.params.offset, req.params.page)
    res.json(result)
})


module.exports = app
