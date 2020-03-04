var express = require('express')
var router = express.Router()
const { playlistsController } = require('./../controller')

router.get('/get-playlists_allnull/:status', playlistsController.getplaylists_allnull)
router.get('/get-playlists_all', playlistsController.getplaylists_all)
router.get('/get-playlists/:id', playlistsController.getplaylists)
router.get('/get-playlists_playlistid/:id', playlistsController.getplaylists_playlistid)
router.post('/add-playlists', playlistsController.tambahplaylist)
router.put('/edit-playlists/:id', playlistsController.editplaylist)
router.delete('/delete-playlists/:id', playlistsController.hapusplaylist)

module.exports = router