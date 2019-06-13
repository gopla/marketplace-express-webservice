const path = require('path')
const express = require('express')
const router = express.Router()

const produkController = require('../controller/produkController')

router.get('/', produkController.index)
router.get('/:id', produkController.show)
router.post('/', produkController.store)
router.put('/:id', produkController.update)
router.delete('/:id', produkController.delete)

module.exports = router