
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
            .then(() => res.redirect('/me/stored/students'))
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
        Student.delete( { _id: req.params.id } )
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /students/:id/force
    forceDelete(req, res, next){
        Student.deleteOne( { _id: req.params.id } )
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] /students/:id/restore
    restore(req, res, next){
        Student.restore( { _id: req.params.id } )
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[POST] /students/handle-form-actions
    handleFormActions(req, res, next){
        switch(req.body.action){
            case 'delete':
                Student.delete( { _id: { $in: req.body.studentIds } } ) //handle array
                    .then(() => res.redirect('back'))
                    .catch(next)
            break;
            default:
                res.json({ message: 'Invalid' })
        }
    }
    //[POST] /students/handle-form-actions
    handleTrashActions(req, res, next){
        switch(req.body.action){
            case 'restore':
                Student.restore( { _id: { $in: req.body.studentIds } } )
                    .then(() => res.redirect('back'))
                    .catch(next)
            break;
            case 'delete':
                Student.deleteMany( {_id: { $in: req.body.studentIds } } )
                    .then(() => res.redirect('back'))
                    .catch(next)
            break;
            default:
                res.json({ message: 'Invalid' })
        }
    }
}

module.exports = new StudentController