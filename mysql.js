
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'agsuser',
    password: '1234',
    database: 'ags_03'
})

connection.connect();