const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/StudentController')

router.get('/create', newsController.create)
router.post('/store', newsController.store)
router.get('/:id/edit', newsController.edit)
router.post('/handle-form-actions', newsController.handleFormActions)
router.post('/handle-trash-actions', newsController.handleTrashActions)
router.put('/:id', newsController.update)
router.patch('/:id/restore', newsController.restore)
router.delete('/:id', newsController.delete)
router.delete('/:id/force', newsController.forceDelete)
router.get('/:slug', newsController.show)

module.exports = router