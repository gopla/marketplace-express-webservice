const express = require("express");
const router = express.Router();

const penggunaController = require("../controller/penggunaController");

const multer = require('multer')
const upload = multer()

const verifyToken = require('../middlewares/verifyToken')

router.get("/", penggunaController.index);
router.get("/:id", penggunaController.show);
router.post("/", penggunaController.store);
router.post("/login", penggunaController.authenticate)
router.put("/", verifyToken, penggunaController.update);
router.delete("/", verifyToken, penggunaController.delete);

router.post("/anggota/daftar", [verifyToken, upload.single('bukti_bayar')], penggunaController.storeAnggota)

module.exports = router;
