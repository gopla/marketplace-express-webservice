const Produk = require("../model/Produk");

module.exports = {
  index(req, res) {
    Produk.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  show(req, res) {
    Produk.findByPk(req.params.id).then(function(rows) {
      res.json(rows);
    });
  },
  store(req, res) {
    Produk.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },
  update(req, res) {
    Produk.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    Produk.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
