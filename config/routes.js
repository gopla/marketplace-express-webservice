const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/produk", require("../routes/produkRouter"));
router.use("/keranjang", require("../routes/keranjangRouter"));
router.use("/transaksi", require("../routes/transaksiRouter"));
router.use("/provinsi", require("../routes/provinsiRouter"));
router.use("/ongkir", require("../routes/ongkirRouter"));
router.use("/daftar", require("../routes/penggunaRouter"));
