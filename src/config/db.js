const mysql = require('mysql');

/*const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});*/

const connection = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    user: "bf45c56975b6a5",
    database: "heroku_b2c2390e6b3c145",
    password: "9869a2c0"
});

connection.connect((err) => {
    if(err) {
        console.log("El error de conexión a DB es: " + err)
        return;
    }
    console.log("Conectado exitosamente a la DB");
});

module.exports = connection;