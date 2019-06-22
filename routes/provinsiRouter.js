const express = require("express");
const router = express.Router();

const provinsiController = require("../controller/provinsiController");

router.get("/", provinsiController.getProvinsi);
router.get("/:id", provinsiController.getProvinsiById);
router.get("/:id/kota", provinsiController.getKota);

module.exports = router;
