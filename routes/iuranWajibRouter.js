const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const iuranWajibController = require("../controller/iuranWajibController");

router.get("/", iuranWajibController.index);
router.get("/:id", iuranWajibController.show);
router.post("/", iuranWajibController.store);
router.delete("/:id", iuranWajibController.destroy);

module.exports = router;
