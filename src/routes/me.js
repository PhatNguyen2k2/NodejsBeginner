const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeController')

router.get('/stored/students', meController.storedStudents)

module.exports = router