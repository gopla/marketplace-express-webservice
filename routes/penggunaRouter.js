const express = require("express");
const router = express.Router();

const penggunaController = require("../controller/penggunaController");

router.get("/", penggunaController.index);
router.get("/:id", penggunaController.show);
router.post("/", penggunaController.store);
router.post("/login", penggunaController.authenticate)
router.put("/:id", penggunaController.update);
router.delete("/:id", penggunaController.delete);

module.exports = router;
