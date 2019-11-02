const express = require("express");
const router = express.Router();

const penarikanController = require("../controller/penarikanController");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", penarikanController.index);
router.get("/:id", penarikanController.show);
router.use(verifyToken);
router.post("/", penarikanController.store);
router.delete("/:id", penarikanController.delete);

module.exports = router;
