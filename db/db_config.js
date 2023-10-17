const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Garima@9",
    port:"3306",
    database:"SRMWS",
});
connection.connect((err) =>{
    if(err){
        console.log("Error connecting to DB");
    }else{
        console.log("Connected to DB");
    }
});

module.exports = {connection};
