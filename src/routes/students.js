const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/StudentController')

router.get('/:slug', newsController.show)

module.exports = router