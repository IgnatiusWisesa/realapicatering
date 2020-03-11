const db = require('./../connection')
const fs = require('fs')
const transporter=require('./../helper/mailer')

module.exports = {

    getmerchants_active: (req, res) => {

        let sql = `SELECT m.*, r.rating FROM merchants m
        left join ratings r
        on m.id = r.idmerchants
        where status = 'active';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmerchants_reviewed: (req, res) => {

        let sql = `SELECT m.*, r.rating FROM merchants m
        left join ratings r
        on m.id = r.idmerchants
        where status = 'review';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmerchants_deleted: (req, res) => {

        let sql = `SELECT m.*, r.rating FROM merchants m
        left join ratings r
        on m.id = r.idmerchants
        where status = 'deleted';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmerchants_name: (req, res) => {

        let sql = `SELECT * FROM merchants where name="${req.body.merchantname}";`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getmerchants_id: (req, res) => {

        let sql = `SELECT m.*, r.rating FROM merchants m 
        left join ratings r
        on m.id = r.idmerchants
        where id=${req.params.id};`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahmerchants: (req, res) => {

        const { name, Manager, PhotoManager, Kitchen, Staff, Specialcook, Photocook, status } = req.body

        var merchantbaru = {
            name,
            Manager,
            PhotoManager,
            Kitchen,
            Staff,
            Specialcook,
            Photocook,
            status
        }

        console.log(merchantbaru)
        let sql = `INSERT INTO merchants SET ?`
        db.query(sql, merchantbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    sendmailmerchant:(req,res)=>{

        const { usernameNM,passwordNM,emailNM } = req.body

        console.log(req.body)

        var x=fs.readFileSync('./merchantnotif.html','utf8')
        // console.log(x)
        // res.send(x)
        var mailoptions={
            from:'Catering Market <wisesa.dwi@gmail.com>',
            to:`${emailNM}`,
            subject:`Welcome to Our Family`,
            html:`${x} 
                <center>
                    <h2 style={textColor:'black'}>
                        This is your access to Catering Market
                        <br></br>
                        username: ${usernameNM}
                        <br></br>
                        password: ${passwordNM}
                        <br></br>
                        <br></br>
                        You can change the password later.
                    </h2>
                    <h2 style={textColor:'black'}>
                        <a href="http://localhost:3000/login">
                            Proceed to Login Page
                        </a>
                    </h2>
                </center>`
        }

        transporter.sendMail(mailoptions,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).send({message:err})
            }
            console.log(result)
            return res.status(200).send({message:'berhasil kirim',result})
        })
    },
    editmerchants: (req, res) => {

        const { name, Manager, PhotoManager, Kitchen, Staff, Specialcook, Photocook, status } = req.body

        var merchantupdate = {
            name,
            Manager,
            PhotoManager,
            Kitchen,
            Staff,
            Specialcook,
            Photocook,
            status
        }

        console.log(merchantupdate)
        let sql = `UPDATE merchants SET ? WHERE id = ?`
        db.query(sql, [merchantupdate, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapusmerchants: (req, res) => {

        let sql = `DELETE FROM merchants WHERE id = ?`
        
        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }

}