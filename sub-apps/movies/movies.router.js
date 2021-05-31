const app = require('express').Router()
const db = require('./mongoose')

app.get('/movie/all', async (req, res) => {
    const result = await db.getMovies()
    res.json(result)
})

app.get('/movie/:id', async (req, res) => {
    const result = await db.getMovies(req.params.id)
    res.json(result)
})

app.post('/movie/create', async (req, res) => {
    res.status(201)
    await db.createMovie(req.body)
    res.json({ ok: true })
})

app.put('/movie/:id', async (req, res) => {
    res.status(201)
    await db.editMovie(req.params.id, req.body)
    res.json({ ok: true })
})

app.delete('/movie/:id', async (req, res) => {
    res.status(200)
    await db.removeMovie(req.params.id)
    res.json({ ok: true })
})

app.get('/movie/:offset/:page', async (req, res) => {
    const result = await db.paginateMovies(req.params.offset, req.params.page)
    res.json(result)
})

module.exports = app