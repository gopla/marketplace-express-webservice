const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/produk", require("../routes/produkHomeRouter"));
router.use("/keranjang", require("../routes/keranjangRouter"));
router.use("/transaksi", require("../routes/transaksiRouter"));
router.use("/provinsi", require("../routes/provinsiRouter"));
router.use("/ongkir", require("../routes/ongkirRouter"));
router.use("/pengguna", require("../routes/penggunaRouter"));
router.use("/usaha", require('../routes/usahaRouter'))
router.use("/admin", require('../routes/adminRouter'))
