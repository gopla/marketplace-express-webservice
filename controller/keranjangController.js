const Keranjang = require("../model/Keranjang");

module.exports = {
  index(req, res) {
    Keranjang.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  store(req, res) {
    Keranjang.create(req.body).then(function(row) {
      res.json(row);
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
