const db = require('./../connection')
const fs = require('fs')

module.exports = {
    tambahrating: (req, res) => {

        const { inputrating } = req.body

        // var ratingbaru = {
        //     RB: newrating*0.02 + 
        // }
        
        // let sql = `UPDATE orders SET ? WHERE id = ${req.params.id}`

        let sql = `select rating from ratings where idmerchants=${req.params.id}`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            let rating = result[0].rating
            let newrating = (inputrating * 0.02) + (rating * 0.98)

            sql = `UPDATE ratings SET rating = ${newrating} WHERE idratings = ${req.params.id};`
            db.query(sql, (err, result) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result)
            })
        })
    },
    getrating: (req,res) => {
        let sql = `select * from ratings`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getrating_id: (req,res) => {
        let sql = `select * from ratings where idmerchants=${req.params.id}`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}