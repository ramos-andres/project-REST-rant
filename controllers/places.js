//confusing; assignment only had "const router = require('express').Router()", had to search web
const express = require('express')
const router = require('express').Router()
const places = require('../models/places.js')
const app = express()

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
  })
  
  // POST /places
  router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('POST /places')
  })
  
  // GET /places/new
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
//exports
module.exports = router
