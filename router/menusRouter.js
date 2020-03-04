var express = require('express')
var router = express.Router()
const { menusController } = require('./../controller')

router.post('/add-menus', menusController.tambahmenu)
router.get('/get-menus', menusController.getmenus)
router.get('/get-menus_besok', menusController.getmenus_besok)
router.get('/get-menus_playlist/:id', menusController.getmenus_playlist)
router.get('/get-menus_playlist_top', menusController.getmenus_playlist_top)
router.get('/get-menus_playlist_recom', menusController.getmenus_playlist_recom)
router.put('/edit-menus/:id', menusController.editmenus)
router.delete('/delete-menus/:id', menusController.hapusmenus)
router.put('/edit-harga-menus/:id', menusController.editharga)

module.exports = router