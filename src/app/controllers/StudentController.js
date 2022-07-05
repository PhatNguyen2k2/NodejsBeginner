
const Student = require('../models/Student')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class StudentController{
    //[GET] /news/:slug
    show(req, res, next){
        Student.findOne({ slug: req.params.slug })
            .then(student => {
                res.render('student/show')
            })
            .catch(next)
    }
}

module.exports = new StudentController