const express = require('express')
const router = express.Router()

const verifyToken = require('../middlewares/verifyToken')

const adminController = require('../controller/adminController')

router.get("/", adminController.index);
router.post("/login", adminController.authenticate)

module.exports = router