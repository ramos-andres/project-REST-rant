//require dotenv package to access MONGO_URI environment variable
require('dotenv').config()
//connection to Mongoose
const mongoose = require('mongoose')

//optional but recommended to remove some warnings
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
//export all of the models
module.exports.Place = require('./places')