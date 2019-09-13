const { produk, usaha } = require("../models");

module.exports = {
  index(req, res) {
    produk.findAll({
      include: {
        model: usaha
      }
    }).then(function(rows) {
      res.json(rows);
    });
  }
};
