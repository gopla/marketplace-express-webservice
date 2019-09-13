module.exports = (req, res, next) => {
    if (!req.user.keanggotaan) {
        res.sendStatus(403)
    }

    next()
}