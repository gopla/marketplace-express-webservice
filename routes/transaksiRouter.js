const express = require('express')
const router = express.Router()

const transaksiController = require('../controller/transaksiController')

const multer = require('multer')
const upload = multer()

router.get('/', transaksiController.index)
router.get('/:id/detail', transaksiController.indexDetail)
router.get('/:id', transaksiController.show)
router.get('/:id/detail/:id_detail', transaksiController.showDetail)
router.post('/', transaksiController.store)
router.post('/:id/detail', transaksiController.storeDetail)
router.put('/:id', upload.single('bukti_bayar'), transaksiController.update)
router.put('/:id/detail/:id_detail', transaksiController.updateDetail)
router.delete('/:id', transaksiController.delete)
router.delete('/:id/detail/:id_detail', transaksiController.deleteDetail)

module.exports = router