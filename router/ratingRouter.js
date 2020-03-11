var express = require('express')
var router = express.Router()
const { ratingController } = require('./../controller')

router.put('/add-rating/:id', ratingController.tambahrating)
router.get('/get-rating', ratingController.getrating)
router.get('/get-rating/:id', ratingController.getrating_id)

module.exports = router