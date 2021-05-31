const app = require('express').Router()
const db = require('./mongoose')

app.get('/item/all', async (req, res) => {
    const result = await db.getItems()
    res.json(result)
})

app.get('/item/:id', async (req, res) => {
    const result = await db.getItem(req.params.id)
    res.json(result)
})

app.post('/item/create', async (req, res) => {
    res.status(201)
    await db.createItem(req.body)
    res.json({ ok: true })
})

app.put('/item/:id', async (req, res) => {
    res.status(201)
    await db.editItem(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/item/:id', async (req, res) => {
    res.status(200)
    await db.removeItem(req.params.id)
    res.json({ ok: true })
})

app.get('/item/:offset/:page', async (req, res) => {
    const result = await db.paginateItems(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app