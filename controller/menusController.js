const db = require('./../connection')

module.exports = {
    tambahmenu: (req, res) => {

        const { playlistid,harga,hari,desc,gam,ing,nut } = req.body

        var ingi = JSON.stringify(ing)
        var nuti = JSON.stringify(nut)

        var menubaru = {
            playlistid,
            harga,
            hari,
            desc,
            gam,
            ing:ingi,
            nut:nuti
        }

        console.log(menubaru)
        let sql = `INSERT INTO menus SET ?`
        db.query(sql, menubaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmenus: (req, res) => {

        let sql = `SELECT * FROM menus`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmenus_besok: (req, res) => {

        let sql = `SELECT men.*,m.name,p.playlistname FROM menus men 
        join playlists p
        on men.playlistid = p.id
        join merchants m
        on m.id = p.merchantid
        group by playlistid;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmenus_playlist: (req,res) => {
        let sql = `select mer.name,p.playlistname,m.* from menus m
        join playlists p on m.playlistid=p.id
        join merchants mer on p.merchantid= mer.id
        where playlistid = ${req.params.id} ;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            console.log(result)
            let id = []
            let merchant = result[0].name
            let playlist = result[0].playlistname
            let harga = result[0].harga
            let hari = []
            let desc = []
            let gam = []
            let ing = []
            let nut = []

            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                hari.push(result[i].hari)
            }
            for(i=0;i<result.length;i++){
                desc.push(result[i].desc)
            }
            for(i=0;i<result.length;i++){
                gam.push(result[i].gam)
            }
            for(i=0;i<result.length;i++){
                ing.push(JSON.parse(result[i].ing))
            }
            for(i=0;i<result.length;i++){
                nut.push(JSON.parse(result[i].nut))
            }

            let hasil = {
                id,
                merchant,
                playlist,
                harga,
                hari,
                desc,
                gam,
                ing,
                nut
            }

            res.status(200).send(hasil)
        })
    },
    getmenus_playlist_top: (req,res) => {
        let sql = `select mer.name,p.playlistname,m.* from menus m
        join playlists p on m.playlistid=p.id
        join merchants mer on p.merchantid= mer.id
        where p.status = 2;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            console.log(result)
            let id = []
            let merchant = result[0].name
            let playlist = result[0].playlistname
            let harga = result[0].harga
            let hari = []
            let desc = []
            let gam = []
            let ing = []
            let nut = []

            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                hari.push(result[i].hari)
            }
            for(i=0;i<result.length;i++){
                desc.push(result[i].desc)
            }
            for(i=0;i<result.length;i++){
                gam.push(result[i].gam)
            }
            for(i=0;i<result.length;i++){
                ing.push(JSON.parse(result[i].ing))
            }
            for(i=0;i<result.length;i++){
                nut.push(JSON.parse(result[i].nut))
            }

            let hasil = {
                id,
                merchant,
                playlist,
                harga,
                hari,
                desc,
                gam,
                ing,
                nut
            }

            res.status(200).send(hasil)
        })
    },
    getmenus_playlist_recom: (req,res) => {
        let sql = `select mer.name,p.playlistname,m.* from menus m
        join playlists p on m.playlistid=p.id
        join merchants mer on p.merchantid= mer.id
        where p.status = 1;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            console.log(result)
            let id = []
            let merchant = result[0].name
            let playlist = result[0].playlistname
            let harga = result[0].harga
            let hari = []
            let desc = []
            let gam = []
            let ing = []
            let nut = []

            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                hari.push(result[i].hari)
            }
            for(i=0;i<result.length;i++){
                desc.push(result[i].desc)
            }
            for(i=0;i<result.length;i++){
                gam.push(result[i].gam)
            }
            for(i=0;i<result.length;i++){
                ing.push(JSON.parse(result[i].ing))
            }
            for(i=0;i<result.length;i++){
                nut.push(JSON.parse(result[i].nut))
            }

            let hasil = {
                id,
                merchant,
                playlist,
                harga,
                hari,
                desc,
                gam,
                ing,
                nut
            }

            res.status(200).send(hasil)
        })
    },
    editmenus: (req, res) => {
        
        const { playlistid,harga,hari,desc,gam,ing,nut } = req.body

        var ingi = JSON.stringify(ing)
        var nuti = JSON.stringify(nut)

        var menuedit = {
            playlistid,
            harga,
            hari,
            desc,
            gam,
            ing:ingi,
            nut:nuti
        }

        console.log(menuedit)
        let sql = `UPDATE menus SET ? WHERE id = ?`
        db.query(sql, [menuedit, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapusmenus: (req, res) => {

        let sql = `DELETE FROM menus WHERE id = ?`
        
        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editharga: (req,res) =>{
        
        let sql = `update menus set harga=${req.body.hargabaru} where playlistid=${req.params.id};`

        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}