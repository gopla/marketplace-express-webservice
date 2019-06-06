const User = require('../model/User')

module.exports = {
    index(req, res) {
        User.findAll()
            .then(function (rows) {
                res.json(rows)
            })
    },
    show(req, res) {
        id = req.params.id
        User.findAll({
                where: {
                    id_user: id
                }
            })
            .then(function (rows) {
                res.json(rows)
            })
    },
    create() {

    },
    store(req, res) {
        user = req.body
        User.create({
                nama: user.nama,
                username: user.username,
                password: user.password
            })
            .then(function (rows) {
                res.json(rows)
            })
    },
    edit() {

    },
    update(req, res) {
        const id = req.params.id
        const user = req.body
        const newData = {
            nama: user.nama,
            username: user.username,
            password: user.password
        }

        User.update(newData, {
                where: {
                    id_user: id
                }
            })
            .then(() => {
                res.json('data updated')
            })
    },
    delete(req, res) {
        const id = req.params.id
        User.destroy({
                where: {
                    id_user: id
                }
            })
            .then(() => {
                res.json('data deleted')
            })
    }
}