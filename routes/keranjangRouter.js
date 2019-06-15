const express = require("express");
const router = express.Router();

const keranjangController = require("../controller/keranjangController");

router.get("/", keranjangController.index);
router.post("/", keranjangController.store);
router.put("/:id", keranjangController.update);
router.delete("/:id", keranjangController.delete);

module.exports = router;
