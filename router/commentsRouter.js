var express = require('express')
var router = express.Router()
const { commentsController } = require('./../controller')

router.get('/get-comments_merchants/:id', commentsController.getcomments_merchant)
router.post('/add-comment', commentsController.tambahcomment)

module.exports = router