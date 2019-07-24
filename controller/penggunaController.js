const { pengguna } = require("../models");

module.exports = {
  index(req, res) {
    pengguna.findAll().then(rows => {
      res.json(rows);
    });
  },
  show(req, res) {
    pengguna.findByPk(req.params.id).then(row => {
      res.json(row);
    });
  },
  store(req, res) {
    pengguna.create(req.body).then(rows => {
      res.json(rows);
    });
  },
  update(req, res) {
    pengguna.findByPk(req.params.id).then(row => {
      row.update(body);
      res.json(row);
    });
  },
  delete(req, res) {
    pengguna.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
