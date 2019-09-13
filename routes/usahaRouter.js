const express = require('express')
const router = express.Router()

const usahaController = require('../controller/usahaController')

const verifyToken = require('../middlewares/verifyToken')
const passIdUsaha = require('../middlewares/passIdUsaha')
const isAnggota = require('../middlewares/isAnggota')

router.get('/', usahaController.index)
router.get('/:id', passIdUsaha, usahaController.show)
router.put('/:id', [verifyToken, isAnggota,passIdUsaha], usahaController.update)
router.delete('/:id', [verifyToken, isAnggota,passIdUsaha], usahaController.delete)

router.use('/:id/produk', [verifyToken, isAnggota,passIdUsaha], require('../routes/produkRouter'))

module.exports = router