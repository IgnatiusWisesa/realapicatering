var express = require('express')
var router = express.Router()
const { userController } = require('./../controller')

router.post('/add-users', userController.tambahusers)
router.put('/edit-users/:id', userController.editusers)
router.put('/edit-users_tanpapass/:id', userController.editusers_tanpapassword)
router.delete('/delete-users/:id', userController.hapususers)
router.get('/get-admin', userController.getusers_admin)
router.get('/get-all', userController.getusers_all)
router.post('/get-username', userController.getusers_username)
router.post('/get-userid', userController.getusers_userid)
router.post('/get-email', userController.getusers_email)
router.post('/get-unp', userController.getusers_undanpass) //get username & password
router.post('/sendmail-changepass/:id',userController.sendmail_changepass)

module.exports = router