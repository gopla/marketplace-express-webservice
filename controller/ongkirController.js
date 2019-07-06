const rajaOngkir = require("rajaongkir-nodejs").Starter(
  "edeaa0dfb104f493d229fbd68f3cc1e9"
);

module.exports = {
  sumBiaya(req, res) {
    var params = {
      origin: req.body.asal,
      destination: req.body.tujuan,
      weight: req.body.berat
    };
    rajaOngkir.getJNECost(params).then(function(data) {
      let obj = data.rajaongkir.results[0].costs;
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].service === "REG") {
          let ongkir = obj[i];
          res.json(ongkir);
        }
      }
      // res.json(obj);
    });
  }
};
