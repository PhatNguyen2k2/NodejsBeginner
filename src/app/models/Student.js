const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
    name: { type: String, default: '' },
    Class: { type: String, default: '' },
    average: { type: Number, min: 0, index: true},
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Student', Student)