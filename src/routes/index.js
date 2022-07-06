const newsRouter = require('./news')
const siteRouter = require('./site')
const studentRouter = require('./students')
const meRouter = require('./me')

route = (app) => {
    app.use('/news', newsRouter)
    app.use('/students', studentRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.send('')
      })
}

module.exports = route