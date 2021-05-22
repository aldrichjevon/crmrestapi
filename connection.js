var mysql = require('mysql');

//Database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crm_sys'
});

conn.connect((error)=>{
    if(error) throw error;
    console.log("Connected");
});

module.exports = conn;