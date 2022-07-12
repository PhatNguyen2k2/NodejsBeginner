
const Student = require('../models/Student')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController{
    //[GET] /me/stored/students
    storedStudents(req, res, next){
        Promise.all([Student.find({}), Student.countDocumentsDeleted()])
            .then(([student, deleteCount]) => {
                res.render('me/stored-students', {
                    deleteCount,
                    student: mutipleMongooseToObject(student),
                })
            })
            .catch(next)
    }

    //[GET] /me/trash/students
    trashStudents(req, res, next){
        Student.findDeleted({})
            .then(student =>  res.render('me/trash-students', {
                student: mutipleMongooseToObject(student)
            }))
            .catch(next)
    }
}

module.exports = new MeController