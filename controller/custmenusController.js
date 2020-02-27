const db = require('./../connection')

module.exports = {

    tambahmain: (req,res) => {
        const { idmerchant,main,descmain,gambarmain,hargamain } = req.body

        var mainbaru = {
            idmerchant,
            main,
            descmain,
            gambarmain,
            hargamain
        }

        console.log(mainbaru)
        let sql = `INSERT INTO custmenusmain SET ?`
        db.query(sql, mainbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahextras: (req,res) => {
        const { idmerchant,extras,descextras,gambarextras,hargaextras } = req.body

        var extrasbaru = {
            idmerchant,
            extras,
            descextras,
            gambarextras,
            hargaextras
        }

        console.log(extrasbaru)
        let sql = `INSERT INTO custmenusextras SET ?`
        db.query(sql, extrasbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahdrinks: (req,res) => {
        const { idmerchant,drinks,descdrinks,gambardrinks,hargadrinks } = req.body

        var drinksbaru = {
            idmerchant,
            drinks,
            descdrinks,
            gambardrinks,
            hargadrinks
        }

        console.log(drinksbaru)
        let sql = `INSERT INTO custmenusdrinks SET ?`
        db.query(sql, drinksbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getcustmenus_main: (req, res) => {

        let sql = `select * from custmenusmain where idmerchant='${req.params.id}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getcustmenus_extras: (req, res) => {

        let sql = `select * from custmenusextras where idmerchant='${req.params.id}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getcustmenus_drinks: (req, res) => {

        let sql = `select * from custmenusdrinks where idmerchant='${req.params.id}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    getcustmenus_all: (req, res) => {

        var sql = `select * from custmenusmain where idmerchant='${req.params.id}';`

        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            main = [],
            descmain = [],
            gambarmain = [],
            hargamain = []
            
            for(i=0;i<result.length;i++){
                main.push(result[i].main)
            }
            for(i=0;i<result.length;i++){
                descmain.push(result[i].descmain)
            }
            for(i=0;i<result.length;i++){
                gambarmain.push(result[i].gambarmain)
            }
            for(i=0;i<result.length;i++){
                hargamain.push(result[i].hargamain)
            }
            // console.log(main)
            // console.log(descmain)
            // console.log(gambarmain)
            // console.log(hargamain)

            sql = `select * from custmenusextras where idmerchant='${req.params.id}';`
            db.query(sql, (err, result1) => {
                if(err) res.status(500).send(err)
                
                extras = [],
                descextras = [],
                gambarextras = [],
                hargaextras = []

                for(i=0;i<result1.length;i++){
                    extras.push(result1[i].extras)
                }
                for(i=0;i<result1.length;i++){
                    descextras.push(result1[i].descextras)
                }
                for(i=0;i<result1.length;i++){
                    gambarextras.push(result1[i].gambarextras)
                }
                for(i=0;i<result1.length;i++){
                    hargaextras.push(result1[i].hargaextras)
                }

                // console.log(extras)
                // console.log(descextras)
                // console.log(gambarextras)
                // console.log(hargaextras)

                sql = `select * from custmenusdrinks where idmerchant='${req.params.id}';`
                db.query(sql, (err, result2) => {
                    if(err) res.status(500).send(err)

                    drinks = [],
                    descdrinks = [],
                    gambardrinks = [],
                    hargadrinks = []

                    for(i=0;i<result2.length;i++){
                        drinks.push(result2[i].drinks)
                    }
                    for(i=0;i<result2.length;i++){
                        descdrinks.push(result2[i].descdrinks)
                    }
                    for(i=0;i<result2.length;i++){
                        gambardrinks.push(result2[i].gambardrinks)
                    }
                    for(i=0;i<result2.length;i++){
                        hargadrinks.push(result2[i].hargadrinks)
                    }

                    // console.log(drinks)
                    // console.log(descdrinks)
                    // console.log(gambardrinks)
                    // console.log(hargadrinks)

                    sql = `select m.name from custmenusmain cm
                            join merchants m
                            on m.id = cm.idmerchant
                            where cm.idmerchant='${req.params.id}'`

                    db.query(sql, (err, result3) => {
                        if(err) res.status(500).send(err)
                        var send = {
                            merchant: result3[0].name,
                            main,
                            descmain,
                            gambarmain,
                            hargamain,
                            extras,
                            descextras,
                            gambarextras,
                            hargaextras,
                            drinks,
                            descdrinks,
                            gambardrinks,
                            hargadrinks
                        }
                        console.log(send)
    
                        res.status(200).send(send)
                    })
                })
            })
        })
    },
    editmain: (req,res) => {
        const { idmerchant,main,descmain,gambarmain,hargamain, makanedit } = req.body

        var mainedit = {
            idmerchant,
            main,
            descmain,
            gambarmain,
            hargamain
        }

        let sql = `UPDATE custmenusmain SET ? WHERE idmerchant=${idmerchant} and main='${makanedit}'`
        db.query(sql, mainedit, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editextras: (req,res) => {
        const { idmerchant,extras,descextras,gambarextras,hargaextras, makanedit } = req.body

        var extrasedit = {
            idmerchant,
            extras,
            descextras,
            gambarextras,
            hargaextras
        }

        let sql = `UPDATE custmenusextras SET ? WHERE idmerchant=${idmerchant} and extras='${makanedit}'`
        db.query(sql, extrasedit, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editdrinks: (req,res) => {
        const { idmerchant,drinks,descdrinks,gambardrinks,hargadrinks, makanedit } = req.body

        var drinksedit = {
            idmerchant,
            drinks,
            descdrinks,
            gambardrinks,
            hargadrinks
        }

        let sql = `UPDATE custmenusdrinks SET ? WHERE idmerchant=${idmerchant} and drinks='${makanedit}'`
        db.query(sql, drinksedit, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    deletemain: (req,res) => {
        const { idmerchant, makanhapus } = req.body
        
        let sql = `DELETE FROM custmenusmain WHERE idmerchant=${idmerchant} and main='${makanhapus}'`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    deleteextras: (req,res) => {
        const { idmerchant, makanhapus } = req.body
        
        let sql = `DELETE FROM custmenusextras WHERE idmerchant=${idmerchant} and extras='${makanhapus}'`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    deletedrinks: (req,res) => {
        const { idmerchant, makanhapus } = req.body
        
        let sql = `DELETE FROM custmenusdrinks WHERE idmerchant=${idmerchant} and drinks='${makanhapus}'`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}