const { pengguna } = require("../models");
const bcrypt = require("bcrypt");

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
    let hashedPass = bcrypt.hashSync(req.body.password, 10);
    pengguna
      .create({
        nama: req.body.nama,
        username: req.body.username,
        password: hashedPass
      })
      .then(rows => {
        res.json(rows);
      })
      .catch(err => {
        res.json({
          success: false,
          message: `Username '${err.fields.username}' sudah ada.`
        });
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
