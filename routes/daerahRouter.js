const express = require("express");
const router = express.Router();

const daerahController = require("../controller/daerahController");

router.get("/", daerahController.getProvinsi);
router.get("/:id", daerahController.getProvinsiById);
router.get("/:id/kota", daerahController.getKota);

module.exports = router;
