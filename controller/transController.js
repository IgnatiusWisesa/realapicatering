const db = require('./../connection')

module.exports = {
    tambahtrans: (req, res) => {

        const { ordersidi, harga, waktucekout } = req.body
        
        var ordersid = JSON.stringify(ordersidi)

        var transaksibaru = {
            ordersid,
            harga,
            waktucekout
        }

        console.log(transaksibaru)
        let sql = `INSERT INTO transaksi SET ?`
        db.query(sql, transaksibaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}