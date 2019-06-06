const path = require('path')
const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.get('/', userController.index)
router.get('/:id', userController.show)
router.get('/create', userController.create)
router.post('/create', userController.store)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router