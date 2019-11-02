const { penarikan, pengguna, iuran_wajib } = require("../models");

module.exports = {
  index(req, res) {
    penarikan
      .findAll({
        include: {
          model: pengguna
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  show(req, res) {
    penarikan
      .findByPk(req.params.id, {
        include: {
          model: pengguna
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  store(req, res) {
    const penarikan = { ...req.body };
    penarikan.id_pengguna = req.user.id_pengguna;
    penarikan.create({ ...penarikan }).then(row => {
      res.json(row);
    });
  },
  delete(req, res) {
    penarikan.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
