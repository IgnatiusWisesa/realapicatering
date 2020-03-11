const db = require('./../connection')
const { uploader } = require('./../helper/uploader')
const fs = require('fs')

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
            
            console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type==2){
                    detail.push(JSON.parse(result[i].detail))
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        paymentimg: hasil.paymentimg[i]
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    },
    getorder_tunggubayar_id: (req,res) => {
        let sql = `select * from orders where userid=${req.params.id} and status='tunggu bayar'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            
            // console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let waktucekout = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail.push(JSON.parse(result[i].detail))
                    console.log(detail)
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                waktucekout.push(result[i].waktucekout)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                waktucekout,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        waktucekout: hasil.waktucekout[i],
                        paymentimg: hasil.paymentimg[i]
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    },
    getorder_onprogress_id: (req,res) => {
        let sql = `select * from orders where userid=${req.params.id} and status='onProgress'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            
            // console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let waktucekout = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail.push(JSON.parse(result[i].detail))
                    console.log(detail)
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                waktucekout.push(result[i].waktucekout)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                waktucekout,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        waktucekout: hasil.waktucekout[i],
                        paymentimg: hasil.paymentimg[i]
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    },
    getorder_waitingConfirm_id: (req,res) => {
        let sql = `select * from orders where userid=${req.params.id} and status='onwaitingConfirm'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            
            // console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let waktucekout = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail.push(JSON.parse(result[i].detail))
                    console.log(detail)
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                waktucekout.push(result[i].waktucekout)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                waktucekout,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        waktucekout: hasil.waktucekout[i],
                        paymentimg: hasil.paymentimg[i]
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    },
    editorder_id: (req, res) => {

        const { userid,type,order,detaili,makanani,price,status,merchant,tanggalpesanan,undate,waktucekout, paymentimg } = req.body

        let kirim = {
            userid,
            type,
            order,
            detail: JSON.stringify(detaili),
            makanan: JSON.stringify(makanani),
            price,
            status,
            merchant,
            tanggalpesanan,
            undate,
            waktucekout,
            paymentimg
        }

        console.log(kirim)

        let sql = `UPDATE orders SET ? WHERE id = ?`
        db.query(sql, [kirim, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editordertrans_all: (req, res) => {

        console.log(req.body)

        let idganti = req.body.id
        console.log(idganti)

        let sql = ''
        for(let i = 0; i < idganti.length; i++){
            sql += `UPDATE orders SET status = '${req.body.status}', waktucekout = '${req.body.waktucekout}', paymentimg = '${req.body.paymentimg}' WHERE id = ${idganti[i]};`
        }

        db.query(sql, (err, result) => {
            // if (err) res.status(500).send(err)
            if (err) throw err
            res.status(200).send(result)
        })
    },
    editordertrans_towaiting_all: (req, res) => {

        try {
            const path = '/transaksi/images';
            const upload = uploader(path, 'TRANS').fields([{ name: 'image' }])

            // console.log(req.params.id)

            upload(req,res,(err)=>{
                if(err){
                    return res.status(500).json({ message: 'Upload picture failed !', error: err.message })
                }
                console.log('lewat') //pada tahap ini foto berhasil diupload
                // console.log(req.files)
                const { image } = req.files
                // console.log(req.files.image)
                // console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                // console.log(imagePath)
                
                let userid = (JSON.parse(req.body.userid))
                // const data = JSON.parse(req.body.data)
                // console.log(data)
                // data.paymentimg = imagePath
                // data.status = 'onwaitingConfirm'
                // data.detail = JSON.stringify({})
                // console.log(data)

                let sql = ''
                for(let i = 0; i < userid.length; i++){
                    sql += `UPDATE orders SET status = 'onwaitingConfirm', undate = 0, paymentimg = '${imagePath}' WHERE id = ${userid[i]};`
                }

                db.query(sql, (err, result) => {
                    // if (err) res.status(500).send(err)
                    if (err) throw err
                    res.status(200).send(result)
                })
            })
        } catch (error) {
            return res.status(500).send(error)
        }

        // console.log(req.files)

        // let idganti = req.body.id
        // console.log(idganti)

        // let sql = ''
        // for(let i = 0; i < idganti.length; i++){
        //     sql += `UPDATE orders SET status = '${req.body.status}', waktucekout = '${req.body.waktucekout}', paymentimg = '${req.body.paymentimg}' WHERE id = ${idganti[i]};`
        // }

        // db.query(sql, (err, result) => {
        //     // if (err) res.status(500).send(err)
        //     if (err) throw err
        //     res.status(200).send(result)
        // })
    },
    get_tanggalUn: (req,res) => {
        let sql = `select * from orders 
        where type=2 and undate is not null and status <> 'dihapus' and status <> 'finish';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    deleteorder: (req,res) => {
        let sql = `DELETE FROM orders WHERE id=${req.params.id}`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    puttransaksi:(req,res)=>{
        try {
            const path = '/transaksi/images';
            const upload = uploader(path, 'TRANS').fields([{ name: 'image' }])

            // console.log(req.params.id)

            upload(req,res,(err)=>{
                if(err){
                    return res.status(500).json({ message: 'Upload picture failed !', error: err.message })
                }
                console.log('lewat') //pada tahap ini foto berhasil diupload
                // console.log(req.files)
                const { image } = req.files
                // console.log(req.files.image)
                // console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                // console.log(imagePath)

                // console.log(req.body.data)
                const data = JSON.parse(req.body.data)
                // console.log(data)
                data.paymentimg = imagePath
                data.status = 'onwaitingConfirm'
                // data.detail = JSON.stringify({})
                console.log(data)

                let sql = `UPDATE orders SET ? WHERE id = ${req.params.id}`
                db.query(sql, data, (err, result)=> {
                    if(err) {
                        fs.unlinkSync('./public' + imagePath)
                        return res.status(500).json({ message: "There's an error on the server. Please contact our admin!", error: err.message })
                    }

                    return res.status(200).send(result)
                })
            })
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getorder_tunggukonfirm: (req,res) => {
        let sql = `select * from orders where status='onwaitingConfirm'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            
            // console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let waktucekout = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail.push(JSON.parse(result[i].detail))
                    console.log(detail)
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                waktucekout.push(result[i].waktucekout)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                waktucekout,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        waktucekout: hasil.waktucekout[i],
                        paymentimg: hasil.paymentimg[i],
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    },
    getorder_tunggurating_id: (req,res) => {
        let sql = `select * from orders where userid=${req.params.id} and status='tunggurating'`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            
            // console.log(result)

            let id = []
            let userid = []
            let merchant = []
            let type = []
            let order = []
            let makanan = []
            let price = []
            let status = []
            let tanggalpesanan = []
            let undate = []
            let waktucekout = []
            let detail = []
            let detail0 = []
            let detail1 = []
            let detail2 = []
            let paymentimg = []

            for(i=0;i<result.length;i++){
                if(result[i].type===2){
                    detail.push(JSON.parse(result[i].detail))
                    console.log(detail)
                }
                else{
                    detail0.push(JSON.parse(result[i].detail)[0])
                    detail1.push(JSON.parse(result[i].detail)[1])
                    detail2.push(JSON.parse(result[i].detail)[2])
                    detail[i]=[detail0,detail1,detail2]
                }
            }
            
            for(i=0;i<result.length;i++){
                id.push(result[i].id)
            }
            for(i=0;i<result.length;i++){
                userid.push(result[i].userid)
            }
            for(i=0;i<result.length;i++){
                merchant.push(result[i].merchant)
            }
            for(i=0;i<result.length;i++){
                type.push(result[i].type)
            }
            for(i=0;i<result.length;i++){
                order.push(result[i].order)
            }
            for(i=0;i<result.length;i++){
                makanan.push(JSON.parse(result[i].makanan))
            }
            for(i=0;i<result.length;i++){
                price.push(result[i].price)
            }
            for(i=0;i<result.length;i++){
                status.push(result[i].status)
            }
            for(i=0;i<result.length;i++){
                tanggalpesanan.push(result[i].tanggalpesanan)
            }
            for(i=0;i<result.length;i++){
                undate.push(result[i].undate)
            }
            for(i=0;i<result.length;i++){
                waktucekout.push(result[i].waktucekout)
            }
            for(i=0;i<result.length;i++){
                paymentimg.push(result[i].paymentimg)
            }

            let hasil = {
                id,
                userid,
                merchant,
                type,
                order,
                makanan,
                price,
                status,
                tanggalpesanan,
                undate,
                detail,
                waktucekout,
                paymentimg
            }
            console.log(hasil)

            let RES = []
            for(var i=0;i<hasil.id.length;i++){
                RES.push(
                    {
                        id: hasil.id[i],
                        userid: hasil.userid[i],
                        merchant: hasil.merchant[i],
                        type: hasil.type[i],
                        order: hasil.order[i],
                        makanan: hasil.makanan[i],
                        price: hasil.price[i],
                        status: hasil.status[i],
                        tanggalpesanan: hasil.tanggalpesanan[i],
                        undate: hasil.undate[i],
                        detail: hasil.detail[i],
                        waktucekout: hasil.waktucekout[i],
                        paymentimg: hasil.paymentimg[i],
                    }
                )
            }
            console.log(RES)

            res.status(200).send(RES)
        })
    }
}