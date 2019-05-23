const Produk = require('../model/Produk')
const path = require('path')

module.exports = {
    index(req, res) {
        Produk.findAll()
            .then(function (rows) {
                res.json(rows)
            })
    },
    show(req, res) {
        const id = req.params.id
        Produk.findAll({
                where: {
                    id_produk: id
                }
            })
            .then(function (rows) {
                res.json(rows)
            })

    },
    create(req, res) {

    },
    store(req, res) {
        const produk = req.body
        Produk.create({
                nama_produk: produk.nama,
                stok: produk.stok,
                harga: produk.harga
            })
            .then(function (rows) {
                res.json(rows)
            })
    },
    edit(req, res) {

    },
    update(req, res) {
        const id = req.params.id
        const produk = req.body
        const newData = {
            nama_produk: produk.nama,
            stok: produk.stok,
            harga: produk.harga
        }

        Produk.update(newData, {
                where: {
                    id_produk: id
                }
            })
            .then(() => {
                res.send('data updated')
            })
    },
    delete(req, res) {
        const id = req.params.id
        Produk.destroy({
                where: {
                    id_produk: id
                }
            })
            .then(() => {
                res.send('data deleted')
            })
    }
}