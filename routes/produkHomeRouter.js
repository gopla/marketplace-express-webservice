const express = require('express')
const router = express.Router()

const produkHomeController = require('../controller/produkHomeController')

router.get('/', produkHomeController.index)

module.exports = router