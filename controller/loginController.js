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
            { 
              id_user: row[0].id_user,
              username: row[0].username,
              nama: row[0].nama,
              keanggotaan: row[0].keanggotaaan 
            },
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
