const { transaksi, detail_transaksi, produk, keranjang } = require("../models");

async function createDetail(transaksi, keranjang) {
    let detail = await detail_transaksi.create({
        id_transaksi: transaksi.id_transaksi,
        id_produk: keranjang.id_produk,
        jumlah: keranjang.jumlah,
        subtotal: keranjang.produk.harga * keranjang.jumlah,
        berat: keranjang.produk.berat * keranjang.jumlah
    })
    await deleteKeranjang(keranjang.id_keranjang)
    return detail
}

async function deleteKeranjang(id_keranjang) {
    let keran = await keranjang.findByPk(id_keranjang)
    await keran.destroy()
}

async function updateStokProduk(keranjang) {
    let prod = await produk.findByPk(keranjang.id_produk)
    prod.stok -= keranjang.jumlah
    await prod.save()
}

function updateTransaksi(transaksi, detail) {
    let trans = transaksi
    trans.total_harga += detail.subtotal
    trans.total_berat += detail.berat
    return trans
}

function createTransaksi(trans) {
    return new Promise(async (resolve, reject) => {
        let transaksi = trans
        let keran = await keranjang.findAll({
            include: {
              model: produk
            }
          })
        for (let i = 0; i < keran.length; i++) {
            let detail = await createDetail(trans, keran[i])
            await updateStokProduk(keran[i])
            transaksi = updateTransaksi(transaksi, detail)
        }
        resolve(transaksi)
        reject("error")
    })
}

module.exports = {
  index(req, res) {
    transaksi.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  indexDetail(req, res) {
    detail_transaksi.findAll({
        where: {
            id_transaksi: req.params.id
        }
    }).then(function(rows) {
      res.json(rows);
    });
  },
  show(req, res) {
    transaksi.findByPk(req.params.id).then(function(rows) {
      res.json(rows);
    });
  },
  showDetail(req, res) {
    detail_transaksi.findByPk(req.params.id_detail).then(function(rows) {
      res.json(rows);
    });
  },
  store(req, res) {
    transaksi.create(req.body).then(function(trans) {
        createTransaksi(trans)
        .then(function (transaksi) {
            return trans.update(transaksi)
        })
        .then(function (rows) {
            res.json(rows);
        })
    });
  },
  storeDetail(req, res) {
      let detail = {...req.body}
      detail.id_transaksi = parseInt(req.params.id)
      const { id_produk } = detail
      produk.findByPk(id_produk).then(function (prod) {
          detail.subtotal = prod.harga * detail.jumlah
          detail.berat = prod.berat * detail.jumlah
          detail_transaksi.create(detail).then(function(det) {
              prod.stok = prod.stok - detail.jumlah
              prod.save().then(function (prod2) {
                transaksi.findByPk(req.params.id).then(function (tran) {
                    transaksi.total_harga += detail.subtotal
                    transaksi.total_berat += detail.berat
                    tran.save().then(function (tran2) {
                        res.json(det);
                    })
                })
            })
        })
    })
  },
  update(req, res) {
    transaksi.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  updateDetail(req, res) {
    detail_transaksi.findByPk(req.params.id_detail).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    transaksi.findByPk(req.params.id).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  },
  deleteDetail(req, res) {
    detail_transaksi.findByPk(req.params.id_detail).then(row => {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
