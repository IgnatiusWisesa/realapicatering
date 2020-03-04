var express = require('express')
var router = express.Router()
const { ordersController } = require('./../controller')

router.post('/add-orders', ordersController.tambahorder)
router.put('/edit-orders/:id', ordersController.editorder_id)
router.get('/get-orders-belumbayar/:id', ordersController.getorder_belumbayar_id)
router.get('/get-date-unavailable', ordersController.get_tanggalUn)

module.exports = router