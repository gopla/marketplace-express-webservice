const { usaha, pengguna } = require("../models");

module.exports = {
  index(req, res) {
    usaha.findAll({
      include: {
        model: pengguna
      }
    }).then(function(rows) {
      res.json(rows);
    });
  },
  show(req, res) {
    usaha.findByPk(req.params.id).then(function(rows) {
      res.json(rows);
    });
  },
  update(req, res) {
    usaha.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    usaha.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
