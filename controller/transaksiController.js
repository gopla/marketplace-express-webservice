const { transaksi, detail_transaksi, produk, keranjang, pengguna, usaha } = require("../models");
const uuidv4 = require("uuid/v4");
const Sequelize = require('sequelize')

const Op = Sequelize.Op;

async function createDetail(transaksi, keranjang) {
  let detail = await detail_transaksi.create({
    id_transaksi: transaksi.id_transaksi,
    id_produk: keranjang.id_produk,
    jumlah: keranjang.jumlah,
    subtotal: keranjang.produk.harga * keranjang.jumlah,
    berat: keranjang.produk.berat * keranjang.jumlah
  });
  await deleteKeranjang(keranjang.id_keranjang);
  return detail;
}

async function deleteKeranjang(id_keranjang) {
  let keran = await keranjang.findByPk(id_keranjang);
  await keran.destroy();
}

async function updateStokProduk(keranjang) {
  let prod = await produk.findByPk(keranjang.id_produk);
  prod.stok -= keranjang.jumlah;
  await prod.save();
}

function updateTransaksi(transaksi, detail) {
  let trans = transaksi;
  trans.total_harga += detail.subtotal;
  trans.total_berat += detail.berat;
  return trans;
}

function createTransaksi(trans, id_keranjang) {
  return new Promise(async (resolve, reject) => {
    let transaksi = trans;
    let keran = await keranjang.findAll({
      where: {
        id_keranjang: {
          [Op.or]: id_keranjang
        }
      },
      include: {
        model: produk,
        where: {
          id_usaha: trans.id_usaha,
        }
      }
    });
    for (let i = 0; i < keran.length; i++) {
      let detail = await createDetail(trans, keran[i]);
      await updateStokProduk(keran[i]);
      transaksi = updateTransaksi(transaksi, detail);
    }
    resolve(transaksi);
    reject("error");
  });
}

module.exports = {
  index(req, res) {
    transaksi.findAll({
      where: {
        id_pengguna: req.user.id_pengguna
      }, 
      order: [["createdAt", "DESC"]]
    }).then(function(rows) {
      res.json(rows);
    });
  },
  indexUnconfirmed(req, res) {
    transaksi.findAll({
      where: {
        konfirmasi: false
      },
      include: [
        {
          model: pengguna
        },
        {
          model: usaha
        }
      ],
      order: [["createdAt", "DESC"]]
    }).then(function(rows) {
      res.json(rows);
    });
  },
  indexDetail(req, res) {
    detail_transaksi
      .findAll({
        where: {
          id_transaksi: req.params.id
        },
        include: {
          model: produk
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    transaksi.findByPk(req.params.id).then(function(rows) {
      res.json(rows);
    });
  },
  confirm(req, res) {
    transaksi.findByPk(req.params.id).then(function(row) {
      row.update({
        konfirmasi: true
      })
      .then(function(updatedRow) {
        res.json(updatedRow)
      })
    })
  },
  showDetail(req, res) {
    detail_transaksi
      .findByPk(req.params.id_detail, {
        include: {
          model: produk
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    const {id_keranjang, ...rest} = req.body
    transaksi
      .create({
        id_transaksi: uuidv4(),
        id_pengguna: req.user.id_pengguna,
        ...rest
      })
      .then(function(trans) {
        createTransaksi(trans, id_keranjang)
          .then(function(transaksi) {
            trans = transaksi;
            return trans.save();
          })
          .then(function(rows) {
            res.json(rows);
          });
      });
  },
  storeDetail(req, res) {
    let detail = { ...req.body };
    detail.id_transaksi = parseInt(req.params.id);
    const { id_produk } = detail;
    produk.findByPk(id_produk).then(function(prod) {
      detail.subtotal = prod.harga * detail.jumlah;
      detail.berat = prod.berat * detail.jumlah;
      detail_transaksi.create(detail).then(function(det) {
        prod.stok = prod.stok - detail.jumlah;
        prod.save().then(function(prod2) {
          transaksi.findByPk(req.params.id).then(function(tran) {
            tran.total_harga += detail.subtotal;
            tran.total_berat += detail.berat;
            tran.save().then(function(tran2) {
              res.json(det);
            });
          });
        });
      });
    });
  },
  update(req, res) {
    const encoded = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;
    transaksi.findByPk(req.params.id).then(function(row) {
      row
        .update({
          bukti_bayar: encoded
        })
        .then(function(updatedRow) {
          res.json(updatedRow);
        });
    });
  },
  updateDetail(req, res) {
    detail_transaksi.findByPk(req.params.id_detail).then(function(row) {
      row.update(req.body).then(function(updatedRow) {
        res.json(updatedRow);
      });
    });
  },
  delete(req, res) {
    transaksi.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  },
  deleteDetail(req, res) {
    detail_transaksi.findByPk(req.params.id_detail).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
