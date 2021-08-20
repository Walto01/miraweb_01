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

function handleDisconnet(conexion_bd){
    connection= mysql.createPool(conexion_bd);

    connection.getConnetion(function(err){
        if(err){
            console.log("error when connecting to db: ", err);
            setTimeout(handleDisconnet, 2000);
        }
    });

    connection.on("error", function(err){
        console.log("db error", err);
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            handleDisconnet();
        } else{
            throw err;
        }
    })

}

handleDisconnet(conexion_bd);

connection.connect((err) => {
    if(err) {
        console.log("El error de conexión a DB es: " + err)
        return;
    }
    console.log("Conectado exitosamente a la DB");
});

module.exports = connection;