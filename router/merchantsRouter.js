var express = require('express')
var router = express.Router()
const { merchantsController } = require('./../controller')

router.get('/get-merchants_active', merchantsController.getmerchants_active)
router.get('/get-merchants_reviewed', merchantsController.getmerchants_reviewed)
router.get('/get-merchants_deleted', merchantsController.getmerchants_deleted)
router.post('/get-merchants_name', merchantsController.getmerchants_name)
router.post('/add-merchants', merchantsController.tambahmerchants)
router.post('/sendmail-merchant',merchantsController.sendmailmerchant)
router.put('/edit-merchants/:id', merchantsController.editmerchants)
router.delete('/delete-merchants/:id', merchantsController.hapusmerchants)

module.exports = router