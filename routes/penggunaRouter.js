const express = require("express");
const router = express.Router();

const penggunaController = require("../controller/penggunaController");

const multer = require('multer')
const upload = multer()

const verifyToken = require('../middlewares/verifyToken')
const isAnggota = require('../middlewares/isAnggota')

router.get("/", penggunaController.index);
router.get("/:id", penggunaController.show);
router.post("/", penggunaController.store);
router.post("/login", penggunaController.authenticate)
router.put("/", verifyToken, penggunaController.update);
router.delete("/", verifyToken, penggunaController.delete);

router.put("/anggota/daftar", [verifyToken, upload.single('bukti_bayar')], penggunaController.storeAnggota)
router.post("/anggota/bukausaha", [verifyToken, isAnggota], penggunaController.bukaUsaha)

module.exports = router;
