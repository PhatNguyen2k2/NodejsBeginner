const Student = require('../models/Student')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController{
    //[GET] /
    home(req, res, next){
        Student.find({})
            .then(student => {
                res.render('home', { 
                    student: mutipleMongooseToObject(student)
                })
            })
            .catch(next)
    }
    //[GET] /search
    search(req, res){
        console.log(req.query.q)
        res.render('search')
    }
}

module.exports = new SiteController