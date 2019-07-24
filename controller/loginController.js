const { pengguna } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  index(req, res) {
    pengguna
      .findAll({
        where: {
          username: req.body.username
        }
      })
      .then(row => {
        if (bcrypt.compareSync(req.body.password, row[0].password)) {
          jwt.sign(
            { username: row[0].username, nama: row[0].nama },
            "ayoKerja",
            function(err, token) {
              res.json({
                success: true,
                token: token
              });
            }
          );
        } else {
          res.json({
            success: false,
            message: "Akun tidak ditemukan"
          });
        }
      })
      .catch(err => {
        res.json(err);
      });
  }
};
