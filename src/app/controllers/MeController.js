
const Student = require('../models/Student')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController{
    //[GET] /me/stored/students
    storedStudents(req, res, next){
        Student.find({})
            .then(student =>  res.render('me/stored-students', {
                student: mutipleMongooseToObject(student)
            }))
            .catch(next)
        }
}

module.exports = new MeController