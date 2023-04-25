const router = require('express').Router()

//first route
router.get('/', (req, res) => {
    res.send('GET /places')
})

//exports
module.exports = router
