const mysql = require('mysql');

/*const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});*/

const conexion_bd = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS 
    
};

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