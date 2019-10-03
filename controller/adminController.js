const { admin } = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    index(req, res) {
        admin
            .findAll()
            .then(function(rows) {
                res.json(rows)
            })
    },
    authenticate(req, res) {
        admin
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(row => {
                if(!row) {
                    return res.json({
                      success: false,
                      message: "Username tidak ditemukan"
                    })
                }
                if (bcrypt.compareSync(req.body.password, row.password)) {
                    jwt.sign(
                      {
                        id_pengguna: row.id_admin,
                        username: row.username
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
                      message: "Password salah"
                    });
                }
            })
    }
}