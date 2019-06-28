const rajaOngkir = require("rajaongkir-nodejs").Starter(
  "edeaa0dfb104f493d229fbd68f3cc1e9"
);
const axios = require("axios");

module.exports = {
  getProvinsi(req, res) {
    rajaOngkir.getProvinces().then(function(data) {
      let obj = data.rajaongkir.results;
      let provinsi = obj.map(data => {
        data.id_provinsi = data.province_id;
        data.nama = data.province;
        delete data.province_id;
        delete data.province;
        return data;
      });
      res.json(provinsi);
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
      .then(response => {
        let obj = response.data.rajaongkir.results;
        let kota = obj.map(data => {
          data.id_provinsi = data.province_id;
          data.provinsi = data.province;
          data.id_kota = data.city_id;
          data.kota = data.city_name;
          data.tipe = data.type;
          data.kode_pos = data.postal_code;
          delete data.province_id;
          delete data.province;
          delete data.city_id;
          delete data.city_name;
          delete data.type;
          delete data.postal_code;
          return data;
        });
        res.json(kota);
      });
  }
};
