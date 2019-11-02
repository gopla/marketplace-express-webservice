const express = require("express");
const router = express.Router();

const pembayaranIuranController = require("../controller/pembayaranIuranController");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", pembayaranIuranController.index);
router.get("/:id", pembayaranIuranController.index);
router.use(verifyToken);
router.post("/", pembayaranIuranController.store);
router.delete("/:id", pembayaranIuranController.delete);

module.exports = router;
