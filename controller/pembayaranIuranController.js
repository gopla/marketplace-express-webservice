const { pembayaran_iuran, pengguna, iuran_wajib } = require("../models");

module.exports = {
  index(req, res) {
    pembayaran_iuran
      .findAll({
        include: {
          model: [pengguna, iuran_wajib]
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  show(req, res) {
    pembayaran_iuran
      .findByPk(req.params.id, {
        include: {
          model: [pengguna, iuran_wajib]
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  store(req, res) {
    const pembayaran = { ...req.body };
    pembayaran.id_pengguna = req.user.id_pengguna;
    pembayaran_iuran.create({ ...pembayaran }).then(row => {
      pengguna.findByPk(row.id_pengguna).then(pengguna => {
        iuran_wajib.findByPk(row.id_iuran_wajib).then(iuran => {
          pengguna.saldo += iuran.jumlah;
          pengguna.save().then(() => res.json(row));
        });
      });
    });
  },
  delete(req, res) {
    pembayaran_iuran.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
