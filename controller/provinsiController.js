const rajaOngkir = require("rajaongkir-nodejs").Starter(
  "edeaa0dfb104f493d229fbd68f3cc1e9"
);
const axios = require("axios");

module.exports = {
  getProvinsi(req, res) {
    rajaOngkir.getProvinces().then(function(data) {
      res.json(data);
    });
  },
  getProvinsiById(req, res) {
    rajaOngkir.getProvince(req.params.id).then(function(data) {
      res.json(data);
    });
  },
  getKota(req, res) {
    axios
      .get(
        "https://api.rajaongkir.com/starter/city?province=" + req.params.id,
        { headers: { key: "edeaa0dfb104f493d229fbd68f3cc1e9" } }
      )
      .then(response => res.json(response.data));
  }
};
