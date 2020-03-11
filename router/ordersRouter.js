var express = require('express')
var router = express.Router()
const { ordersController } = require('./../controller')

router.post('/add-orders', ordersController.tambahorder)
router.put('/edit-orders/:id', ordersController.editorder_id)
router.put('/edit-orders-trans-all', ordersController.editordertrans_all)
router.put('/edit-orders-transtowait-all', ordersController.editordertrans_towaiting_all)
router.get('/get-orders-belumbayar/:id', ordersController.getorder_belumbayar_id)
router.get('/get-orders-tunggubayar/:id', ordersController.getorder_tunggubayar_id)
router.get('/get-orders-onprogress/:id', ordersController.getorder_onprogress_id)
router.get('/get-orders-onwaitingConfirm/:id', ordersController.getorder_waitingConfirm_id)
router.get('/get-date-unavailable', ordersController.get_tanggalUn)
router.delete('/delete-order/:id', ordersController.deleteorder)
router.put('/put-transaksi/:id', ordersController.puttransaksi)
router.get('/get-orders-waiting', ordersController.getorder_tunggukonfirm)
router.get('/get-orders-tunggurating/:id', ordersController.getorder_tunggurating_id)

module.exports = router