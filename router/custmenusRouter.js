var express = require('express')
var router = express.Router()
const { custmenusController } = require('./../controller')

router.post('/add-main', custmenusController.tambahmain)
router.post('/add-extras', custmenusController.tambahextras)
router.post('/add-drinks', custmenusController.tambahdrinks)
router.get('/getcustmenus-main/:id', custmenusController.getcustmenus_main)
router.get('/getcustmenus-extras/:id', custmenusController.getcustmenus_extras)
router.get('/getcustmenus-drinks/:id', custmenusController.getcustmenus_drinks)
router.get('/getcustmenus-all/:id', custmenusController.getcustmenus_all)
router.put('/edit-main', custmenusController.editmain)
router.put('/edit-extras', custmenusController.editextras)
router.put('/edit-drinks', custmenusController.editdrinks)
router.post('/delete-main', custmenusController.deletemain)
router.post('/delete-extras', custmenusController.deleteextras)
router.post('/delete-drinks', custmenusController.deletedrinks)

module.exports = router