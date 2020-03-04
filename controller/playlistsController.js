const db = require('./../connection')

module.exports = {
    
    getplaylists_allnull: (req, res) => {

        let sql = `SELECT m.name,p.* FROM playlists p join merchants m on p.merchantid = m.id where p.status=${req.params.status};`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getplaylists_all: (req, res) => {

        let sql = `SELECT m.name,p.* FROM playlists p join merchants m on p.merchantid = m.id;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getplaylists: (req, res) => {

        let sql = `SELECT * FROM playlists where merchantid =${req.params.id}`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getplaylists_playlistid: (req, res) => {

        let sql = `SELECT * FROM playlists where id =${req.params.id}`

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
            image,
            status:0
        }

        console.log(playlistbaru)
        let sql = `INSERT INTO playlists SET ?`
        db.query(sql, playlistbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editplaylist: (req, res) => {

        const { merchantid, playlistname, description, longdesc, priceFrom, image, status } = req.body

        var playlistupdate = {
            merchantid,
            playlistname,
            description,
            longdesc,
            priceFrom,
            image,
            status
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