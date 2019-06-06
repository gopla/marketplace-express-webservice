const path = require('path')
const express = require('express')
const app = express()

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.urlencoded())
app.use('/produk', require('./routes/produkRouter'))
app.use('/user', require('./routes/userRouter'))

app.listen(3000, function () {
    console.log(' -> Server listening on port 3000')
})