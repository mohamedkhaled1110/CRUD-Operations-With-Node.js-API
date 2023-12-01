const mysql = require('mysql2');

const q = mysql.createConnection({
    host:'localhost',
    database:'tests',
    user:'root',
    password:''
})

module.exports = q;