const app = require('express').Router()
const db = require('./mongoose')

app.get('/character/all', async (req, res) => {
    const result = await db.getCharacters()
    res.json(result)
})

app.get('/character/:id', async (req, res) => {
    const result = await db.getCharacter(req.params.id)
    res.json(result)
})

app.post('/character/create', async (req, res) => {
    res.status(201)
    await db.createCharacter(req.body)
    res.json({ ok: true })
})

app.put('/character/:id', async (req, res) => {
    res.status(201)
    await db.editCharacter(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/character/:id', async (req, res) => {
    res.status(200)
    await db.removeCharacter(req.params.id)
    res.json({ ok: true })
})

app.get('/character/:offset/:page', async (req, res) => {
    const result = await db.paginateCharacters(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app