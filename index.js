//dependencies
require('dotenv').config()
const express = require('express')

//configuration
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

//listen
app.listen(process.env.PORT)
