//require models folder; gives CRUD access to the database
const db = require('../models')
//create an array of objects to seed the database
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thairestaurant.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/catcafe.jpg',
    founded: 2020
}])
//logic for what to do when the create resolves (either success or failure) in a promise
.then(() => {
    console.log('Success!')
    //close the connection to the database
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    //close the connection to the database
    process.exit()
})
