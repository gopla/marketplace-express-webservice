const Keranjang = require("../model/Keranjang");
const Produk = require("../model/Produk");

module.exports = {
  index(req, res) {
    Keranjang.findAll({
      include: {
        model: Produk
      }
    }).then(function(rows) {
      res.json(rows);
    });
  },
  store(req, res) {
    Keranjang.findAll({
      where: {
        id_produk: req.body.id_produk
      }
    }).then(function(rows) {
      if (rows.length) {
        Keranjang.findByPk(rows[0].id_keranjang).then(function(row) {
          row.update({
            jumlah: rows[0].jumlah + req.body.jumlah
          });
          res.json(row);
        });
      } else {
        Keranjang.create(req.body).then(function(row) {
          res.json(row);
        });
      }
    });
  },
  update(req, res) {
    Keranjang.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    Keranjang.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
