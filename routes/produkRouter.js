const path = require('path')
const express = require('express')
const router = express.Router()

const produkController = require('../controller/produkController')

router.get('/', produkController.index)
router.get('/:id', produkController.show)
router.get('/create', produkController.create)
router.post('/create', produkController.store)
router.get('/:id/edit', produkController.edit)
router.put('/:id', produkController.update)
router.delete('/:id', produkController.delete)

module.exports = router