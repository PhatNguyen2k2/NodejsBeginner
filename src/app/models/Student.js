const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema

const Student = new Schema({
    name: { type: String, default: '' },
    Class: { type: String, default: '' },
    average: { type: Number, min: 0, index: true},
    image: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps : true,
})

//add plugin
mongoose.plugin(slug)
Student.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('Student', Student)