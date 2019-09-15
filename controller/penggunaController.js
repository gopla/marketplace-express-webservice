const { pengguna, usaha } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  index(req, res) {
    pengguna.findAll({
      include: [usaha]
    }).then(rows => {
      res.json(rows);
    });
  },
  show(req, res) {
    pengguna.findByPk(req.params.id, {
      include: [usaha]
    }).then(row => {
      res.json(row);
    });
  },
  authenticate(req, res) {
    pengguna
      .findOne({
        where: {
          username: req.body.username
        },
        include: [usaha]
      })
      .then(row => {
        if(!row) {
          return res.json({
            success: false,
            message: "Username tidak ditemukan"
          });
        }
        if (bcrypt.compareSync(req.body.password, row.password)) {
          jwt.sign(
            {
              id_pengguna: row.id_pengguna,
              username: row.username,
              nama: row.nama,
              keanggotaan: row.keanggotaan,
              usaha: row.usaha
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
      .catch(err => {
        res.json(err);
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
    pengguna.findByPk(req.user.id_pengguna).then(row => {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    pengguna.findByPk(req.user.id_pengguna).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  },
  storeAnggota(req, res) {
    // const encoded = `data:${
    //   req.file.mimetype
    // };base64,${req.file.buffer.toString("base64")}`;
    pengguna.findByPk(req.user.id_pengguna, {
      include: [usaha]
    }).then(row => {
      row.update({
        keanggotaan: true,
        // bukti_bayar: encoded
      })
      .then((updatedRow) => {
        jwt.sign(
          {
            id_pengguna: row.id_pengguna,
            username: row.username,
            nama: row.nama,
            keanggotaan: row.keanggotaan,
            usaha: row.usaha
          },
          "ayoKerja",
          function(err, token) {
            res.json({
              success: true,
              user: updatedRow,
              token
            });
          }
        );
      })
    })
  },
  bukaUsaha(req, res) {
    usaha
      .create({...req.body, id_pengguna: req.user.id_pengguna})
      .then(rows => res.json(rows))
      .catch(err => res.json(err))
  }
};
