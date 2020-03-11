var mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'projectcatering',
    multipleStatements:true
})

module.exports=db