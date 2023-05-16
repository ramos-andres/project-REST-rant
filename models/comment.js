//require mongoose
const mongoose = require('mongoose')
//instantiate a new schema
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
//export the model created with the schema
module.exports = mongoose.model('Comment', commentSchema)
