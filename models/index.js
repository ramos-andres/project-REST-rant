//connection to Mongoose
const mongoose = require('mongoose')

//optional but recommended to remove some warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
//export all of the models
module.exports.Place = require('./places')