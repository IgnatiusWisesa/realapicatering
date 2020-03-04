const db = require('./../connection')

module.exports = {
    
    getcomments_merchant: (req, res) => {

        let sql = `SELECT c.*,u.username FROM comments c
        left join users u on c.userid = u.id
        where c.merchantid=${req.params.id};`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahcomment: (req, res) => {
        const { komentar, userid, merchantid } = req.body

        var komentarbaru = {
            komentar,
            userid, 
            merchantid
        }

        console.log(komentarbaru)
        let sql = `INSERT INTO comments SET ?`
        db.query(sql, komentarbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}