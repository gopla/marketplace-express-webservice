const { produk } = require("../models");

module.exports = {
  index(req, res) {
    produk.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  show(req, res) {
    produk.findByPk(req.params.id).then(function(rows) {
      res.json(rows);
    });
  },
  store(req, res) {
    produk.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },
  update(req, res) {
    produk.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    produk.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
