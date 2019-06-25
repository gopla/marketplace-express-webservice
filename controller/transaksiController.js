const { transaksi, detail_transaksi, produk } = require("../models");

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
    transaksi.create(req.body).then(function(rows) {
      res.json(rows);
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
