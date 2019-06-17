const { keranjang, produk } = require("../models");

module.exports = {
  index(req, res) {
    keranjang
      .findAll({
        include: {
          model: produk
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    keranjang
      .findAll({
        where: {
          id_produk: req.body.id_produk
        }
      })
      .then(function(rows) {
        if (rows.length) {
          keranjang.findByPk(rows[0].id_keranjang).then(function(row) {
            row.update({
              jumlah: rows[0].jumlah + req.body.jumlah
            });
            res.json(row);
          });
        } else {
          keranjang.create(req.body).then(function(row) {
            res.json(row);
          });
        }
      });
  },
  update(req, res) {
    keranjang.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    keranjang.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
