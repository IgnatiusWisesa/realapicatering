const express=require('express')
const { chatController } = require('./../controller')

const router=express.Router()

router.get('/getmessages', chatController.getMessage)
router.post('/sendmessage', chatController.sendMessage)
router.delete('/clearmessages-all', chatController.clearMessage_all)

module.exports=router