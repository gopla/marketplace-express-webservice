const { keranjang, produk } = require("../models");

module.exports = {
  index(req, res) {
    keranjang
      .findAll(
        {
          where : {
            id_pengguna: req.user.id_pengguna
          },
          include: {
            model: produk
          }
        }
      )
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    keranjang
      .findAll({
        where: {
          id_produk: req.body.id_produk,
          id_pengguna: req.user.id_pengguna
        }
      })
      .then(function(rows) {
        if (rows.length) {
          keranjang.findByPk(rows[0].id_keranjang).then(function(row) {
            row.update({
              jumlah: rows[0].jumlah + parseInt(req.body.jumlah)
            });
            res.json(row);
          });
        } else {
          let _keranjang = req.body
          _keranjang.id_pengguna = req.user.id_pengguna
          console.log(_keranjang)
          keranjang.create(_keranjang).then(function(row) {
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
