//dependencies
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

//configuration
const app = express()

//define view engine (JSX)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//places controller
app.use('/places', require('./controllers/places.js'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//listen
app.listen(process.env.PORT)
