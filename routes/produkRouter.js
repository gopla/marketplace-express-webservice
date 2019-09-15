const express = require('express')
const router = express.Router()

const produkController = require('../controller/produkController')

const verifyToken = require('../middlewares/verifyToken')
const isAnggota = require('../middlewares/isAnggota')

router.get('/', produkController.index)
router.get('/:id', produkController.show)
router.use([verifyToken, isAnggota])
router.post('/', produkController.store)
router.put('/:id', produkController.update)
router.delete('/:id', produkController.delete)

module.exports = router