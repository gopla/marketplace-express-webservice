const express = require('express')
const router = express.Router()

const keranjangController = require('../controller/keranjangController')

router.get('/:id/detail_keranjang', keranjangController.index)
router.post('/:id/detail_keranjang', keranjangController.store)
router.put('/:id/detail_keranjang/:id_detail_keranjang', keranjangController.update)
router.delete('/:id/detail_keranjang/:id_detail_keranjang', keranjangController.delete)
