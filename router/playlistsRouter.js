var express = require('express')
var router = express.Router()
const { playlistsController } = require('./../controller')

router.get('/get-playlists/:id', playlistsController.getplaylists)
router.post('/add-playlists', playlistsController.tambahplaylist)
router.put('/edit-playlists/:id', playlistsController.editplaylist)
router.delete('/delete-playlists/:id', playlistsController.hapusplaylist)

module.exports = router