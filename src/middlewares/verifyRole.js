const User = require('../app/models/User')

const verifyRole = (allowedRole) =>{
    return (req, res, next) =>{
        User.findOne({ name: req.query.name })
            .then(user =>{
                if(user === null || user.role !== allowedRole) return res.sendStatus(403)
            })
        next()
    }
}

module.exports = verifyRole