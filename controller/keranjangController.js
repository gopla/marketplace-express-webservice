const DetailKeranjang = require("../model/DetailKeranjang");

module.exports = {
  index(req, res) {
    DetailKeranjang.find({
      where: {
        id_keranjang: req.params.id
      }
    }).then(function(rows) {
      res.json(rows);
    });

    // res.json(
    //   await DetailKeranjang.find({
    //     where: {
    //       id_keranjang: req.params.id
    //     }
    //   })
    // );
  },
  store(req, res) {
    DetailKeranjang.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },
  update(req, res) {
    DetailKeranjang.findByPk(req.params.id_detail_keranjang).then(function(
      row
    ) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    DetailKeranjang.findByPk(req.params.id_detail_keranjang).then(function(
      row
    ) {
      row.destroy();
      res.json({
        success: true
      });
    });
  }
};
