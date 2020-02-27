const db = require('./../connection')
const cryptogenerate=require('./../helper/encrypt')
const { createJWTToken }=require('./../helper/jwt')
const { uploader } = require('./../helper/uploader')
const fs = require('fs')
const transporter=require('./../helper/mailer')

module.exports = {
    tambahusers: (req, res) => {
        const { first, last, merchantid, username, phone, email, city, fulladdress, password, roleid, login } = req.body

        var hashpassword=cryptogenerate(password)
        console.log(hashpassword)

        var userbaru = {
            roleid,
            merchantid,
            first,
            last,
            username,
            phone,
            email,
            city,
            fulladdress,
            password:hashpassword,
            login
        }

        console.log(userbaru)
        let sql = `INSERT INTO users SET ?`
        db.query(sql, userbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editusers: (req, res) => {
        const { first, last, username, phone, email, city, fulladdress, password, roleid, login } = req.body

        var hashpassword=cryptogenerate(password)

        var updateuser = {
            first,
            last,
            username,
            phone,
            email,
            city,
            fulladdress,
            password:hashpassword,
            roleid,
            login
        }

        let sql = `UPDATE users SET ? WHERE id = ?`
        db.query(sql, [updateuser, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editusers_tanpapassword: (req, res) => {
        const { first, last, username, phone, email, city, fulladdress, password, roleid, login } = req.body

        var updateuser = {
            first,
            last,
            username,
            phone,
            email,
            city,
            fulladdress,
            password,
            roleid,
            login
        }

        let sql = `UPDATE users SET ? WHERE id = ?`
        db.query(sql, [updateuser, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapususers: (req, res) => {

        let sql = `DELETE FROM users WHERE id = ?`
        
        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_admin: (req, res) => {

        let sql = `select * from users where username='admin';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_all: (req, res) => {

        let sql = `select * from users;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_userid: (req, res) => {

        let sql = `select * from users where id='${req.body.id}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_username: (req, res) => {

        let sql = `select * from users where username='${req.body.username}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_email: (req, res) => {

        let sql = `select * from users where email='${req.body.email}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getusers_undanpass: (req, res) => {

        const { username,email,password } = req.body
        
        var hashpassword=cryptogenerate(password)
        let sql = ''
        // console.log(username)
        // console.log(hashpassword)

        if(username===undefined){
            sql = `SELECT * from users where username='${email}' and password='${hashpassword}';`
        }
        else if(email===undefined){
            sql = `select * from users where username='${username}' and password='${hashpassword}';`
        }
        console.log(sql)

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    sendmail_changepass:(req,res)=>{

        const { email } = req.body
        console.log(req.body)
        console.log(req.params.id)

        var mailoptions={
            from:'Catering Market <wisesa.dwi@gmail.com>',
            to:`${email}`,
            subject:`Seems You Have Forgotten Your Password`,
            html:`
                <center>
                    <h3 style={textColor:'black'}>
                        Here's a link to get a new password
                        <br></br>
                        <a href="http://localhost:3000/gantipassword/${req.params.id}">
                            Link to change password
                        </a>
                    </h3>
                </center>`
        }

        transporter.sendMail(mailoptions,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).send({message:err})
            }
            // console.log(result)
            return res.status(200).send({message:'berhasil kirim',result})
        })
    }

}