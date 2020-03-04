const db = require('./../connection')

module.exports = {
    tambahorder: (req, res) => {

        const { userid,type,order,detaili,makanani,price,status,merchant,tanggalpesanan,undate } = req.body

        var detail = JSON.stringify(detaili)
        var makanan = JSON.stringify(makanani)

        var orderbaru = {
            userid,
            type,
            order,
            detail,
            makanan,
            price,
            status,
            merchant,
            tanggalpesanan,
            undate
        }

        console.log(orderbaru)
        let sql = `INSERT INTO orders SET ?`
        db.query(sql, orderbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getorder_belumbayar_id: (req,res) => {
        let sql = `select * from orders where userid=${req.params.id} and status='belum bayar'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            let userid = []
            let merchant = []
            let type = []
            let order = []

            let detail0 = []
            
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []

            console.log(result[2].detail)

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail0.push(JSON.parse(result[i].detail))
                }
                else{
                    console.log(result[i].detail)
                }
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }

            let hasil = {
                detail0,
                makanan
            }
            console.log(hasil)

            res.status(200).send(result)
        })
    },
    editorder_id: (req, res) => {

        const { userid,type,order,detaili,makanani,price,status } = req.body

        var detail = JSON.stringify(detaili)
        var makanan = JSON.stringify(makanani)

        var orderedit = {
            userid,
            type,
            order,
            detail,
            makanan,
            price,
            status
        }

        console.log(orderedit)
        let sql = `UPDATE orders SET ? WHERE id = ?`
        db.query(sql, [orderedit, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    get_tanggalUn: (req,res) => {
        let sql = `select * from orders 
        where undate is not null and status <> 'dihapus';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}