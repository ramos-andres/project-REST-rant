//require mongoose
const mongoose = require('mongoose')

//create a schema for defining a place
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})
//add a method to the schema
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
//export the schema as a model
module.exports = mongoose.model('Place', placeSchema)
