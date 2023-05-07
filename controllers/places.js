//confusing; assignment only had "const router = require('express').Router()", had to search web
const express = require('express')
const router = require('express').Router()
const app = express()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/thairestaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catcafe.jpg'
      }]
      
    res.render('places/index', {places})
  })
  
  // GET /places/new
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
//exports
module.exports = router
