
const Student = require('../models/Student')
const { mongooseToObject } = require('../../util/mongoose')

class StudentController{
    //[GET] /students/:slug
    show(req, res, next){
        Student.findOne({ slug: req.params.slug })
            .then(student => {
                res.render('student/show')
            })
            .catch(next)
    }
    //[GET] /students/create
    create(req, res, next){
        res.render('student/create')
    }
    //[POST] /students/store
    store(req, res, next){
        const student = new Student(req.body)
        student.save()
            .then(() => res.redirect('/'))
    }
    //[GET] /students/:id/edit
    edit(req, res, next){
        Student.findById(req.params.id)
            .then(student => res.render('student/edit', {
                student: mongooseToObject(student)
            }))
            .catch(next)
    }
    //[PUT] /students/:id
    update(req, res, next){
        Student.updateOne( { _id: req.params.id }, req.body )
            .then(() => res.redirect('/me/stored/students'))
            .catch(next)
    }
    //[DELETE] /students/:id
    delete(req, res, next){
        Student.deleteOne( { _id: req.params.id } )
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new StudentController