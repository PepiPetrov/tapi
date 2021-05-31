const app = require('express').Router()
const db = require('./mongoose')

app.get('/quote/all', async (req, res) => {
    const result = await db.getQuotes()
    res.json(result)
})

app.get('/quote/:id', async (req, res) => {
    const result = await db.getQuote(req.params.id)
    res.json(result)
})

app.post('/quote/create', async (req, res) => {
    res.status(201)
    await db.createQuote(req.body)
    res.json({ ok: true })
})

app.put('/quote/:id', async (req, res) => {
    res.status(201)
    await db.editQuote(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/quote/:id', async (req, res) => {
    res.status(200)
    await db.removeQuote(req.params.id)
    res.json({ ok: true })
})

app.get('/quote/:offset/:page', async (req, res) => {
    const result = await db.paginateQuotess(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app