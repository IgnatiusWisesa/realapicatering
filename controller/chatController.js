const db = require('./../connection')

module.exports = {
    getMessage: (req,res) =>{
        // res.status(200).send(req.app.arrMsg)
        let sql = `SELECT * FROM chat;`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })

    },
    sendMessage: (req,res) =>{
        
        const { username,message } = req.body
        
        var timestamp = Math.round(new Date().getTime()/1000),
        date = new Date(timestamp * 1000),
        datevalues = [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        ];

        let pushmsg = {
            username,
            message,
            time: datevalues[2]+'/'+datevalues[1]+'/'+datevalues[0]+' '+datevalues[3]+':'+datevalues[4]+':'+datevalues[5]
        }
        console.log(pushmsg)
        
        // req.app.arrMsg.push(pushmsg)
        // console.log(req.app.arrMsg)

        let sql = `INSERT INTO chat SET ?`
        db.query(sql, pushmsg, (err, result) => {
            if(err) res.status(500).send(err)
            req.app.io.emit('chat message', pushmsg)
            res.status(200).send({ message: 'Send Message Success' })
        })
    },
    clearMessage_all: (req,res) =>{
        // req.app.arrMsg = []
        // req.app.io.emit('chat message', req.app.arrMsg)
        // res.status(200).send({ message: 'Clear Message Success' })

        let sql = `DELETE FROM chat`
        
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            req.app.io.emit('chat message', result)
            res.status(200).send({ message: 'Clear Message Success' })
        })
    }
}