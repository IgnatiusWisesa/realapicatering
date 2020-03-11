var express = require('express')
var router = express.Router()
const { transController } = require('./../controller')

router.post('/add-transaksi', transController.tambahtrans)

module.exports = router