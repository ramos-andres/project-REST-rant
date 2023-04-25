//dependencies
require('dotenv').config()
const express = require('express')

//configuration
const app = express()

//places controller
app.use('/places', require('./controllers/places.js'))

//routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen
app.listen(process.env.PORT)
