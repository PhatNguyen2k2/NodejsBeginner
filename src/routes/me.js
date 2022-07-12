const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeController')

router.get('/stored/students', meController.storedStudents)
router.get('/trash/students', meController.trashStudents)

module.exports = router