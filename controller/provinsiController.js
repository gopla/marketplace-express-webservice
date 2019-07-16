const rajaOngkir = require("rajaongkir-nodejs").Starter(
  "edeaa0dfb104f493d229fbd68f3cc1e9"
);
const axios = require("axios");

module.exports = {
  getProvinsi(req, res) {
    rajaOngkir.getProvinces().then(function(data) {
      let obj = data.rajaongkir.results;
      let provinsi = obj.map(data => ({
        id_provinsi: data.province_id,
        provinsi: data.province
      }));
      res.json(provinsi);
    });
  },
  getProvinsiById(req, res) {
    rajaOngkir.getProvince(req.params.id).then(function(data) {
      res.json({
        id_provinsi: data.rajaongkir.results.province_id,
        provinsi: data.rajaongkir.results.province
      });
    });
  },
  getKota(req, res) {
    axios
      .get(
        "https://api.rajaongkir.com/starter/city?province=" + req.params.id,
        { headers: { key: "edeaa0dfb104f493d229fbd68f3cc1e9" } }
      )
      .then(response => {
        let obj = response.data.rajaongkir.results;
        let kota = obj.map(data => ({
          id_provinsi: data.province_id,
          provinsi: data.province,
          id_kota: data.city_id,
          kota: data.city_name,
          tipe: data.type,
          kode_pos: data.postal_code
        }));
        res.json(kota);
      });
  }
};
