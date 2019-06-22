const express = require("express");
const router = express.Router();

const ongkirController = require("../controller/ongkirController");

router.post("/", ongkirController.sumBiaya);

module.exports = router;
