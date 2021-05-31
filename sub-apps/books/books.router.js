const app = require('express').Router()
const db = require('./mongoose')

app.get('/book/all', async (req, res) => {
    const result = await db.getBooks()
    res.json(result)
})

app.get('/book/:id', async (req, res) => {
    const result = await db.getBook(req.params.id)
    res.json(result)
})

app.post('/book/create', async (req, res) => {
    res.status(201)
    await db.createBook(req.body)
    res.json({ ok: true })
})

app.put('/book/:id', async (req, res) => {
    res.status(201)
    console.log(req.params.id)
    await db.editBook(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/book/:id', async (req, res) => {
    res.status(200)
    await db.removeBook(req.params.id)
    res.json({ ok: true })
})

app.get('/book/:offset/:page', async (req, res) => {
    const result = await db.paginateBooks(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app