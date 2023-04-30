//dependencies
require('dotenv').config()
const express = require('express')

//configuration
const app = express()

//define view engine (JSX)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//places controller
app.use('/places', require('./controllers/places.js'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen
app.listen(process.env.PORT)
