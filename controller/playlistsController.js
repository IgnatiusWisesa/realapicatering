const db = require('./../connection')

module.exports = {
    
    getplaylists: (req, res) => {

        let sql = `SELECT * FROM playlists where merchantid =${req.params.id}`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahplaylist: (req, res) => {

        const { merchantid, playlistname, description, longdesc, priceFrom, image } = req.body

        var playlistbaru = {
            merchantid,
            playlistname,
            description,
            longdesc,
            priceFrom,
            image
        }

        console.log(playlistbaru)
        let sql = `INSERT INTO playlists SET ?`
        db.query(sql, playlistbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editplaylist: (req, res) => {

        const { merchantid, playlistname, description, longdesc, priceFrom, image } = req.body

        var playlistupdate = {
            merchantid,
            playlistname,
            description,
            longdesc,
            priceFrom,
            image
        }

        console.log(playlistupdate)
        let sql = `UPDATE playlists SET ? WHERE id = ?`
        db.query(sql, [playlistupdate, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapusplaylist: (req,res) => {

        let sql = `DELETE FROM playlists WHERE id = ?`
        
        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }

}