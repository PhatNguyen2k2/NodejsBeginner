const newsRouter = require('./news')
const siteRouter = require('./site')
const studentRouter = require('./students')
const meRouter = require('./me')
const auth= require('./auth')

route = (app) => {
    app.use('/news', newsRouter)
    app.use('/students', studentRouter)
    app.use('/me', meRouter)
    app.use('/auth', auth)
    app.use('/', siteRouter)
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.send('')
      })
}

module.exports = route