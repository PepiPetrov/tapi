const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

// const mongoose = require('./mongoose/mongoose')

app.use(require('./sub-apps/books/books.router'))
app.use(require('./sub-apps/chapters/chapters.router'))
app.use(require('./sub-apps/characters/characters.router'))
app.use(require('./sub-apps/destinations/destinations.router'))
app.use(require('./sub-apps/events/events.router'))
app.use(require('./sub-apps/items/items.router'))
app.use(require('./sub-apps/journeys/journeys.router'))
app.use(require('./sub-apps/movies/movies.router'))
app.use(require('./sub-apps/quotes/quotes.router'))
app.use(require('./sub-apps/stories/stories.router'))

app.listen(3000)