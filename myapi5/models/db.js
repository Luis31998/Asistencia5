require('dotenv').config();
const fs = require('fs');
const mysql = require('mysql2');
const path = require('path');
const certPath = path.join(__dirname, '..', 'certificados', 'DigiCertGlobalRootCA.crt.pem');

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10 ,
    ssl: {
        ca: fs.readFileSync(certPath)
    }
});

// Prueba de conexión
dbPool.getConnection((error, connection) => {
    if (error) {
        console.error("Error al conectar a la base de datos:", error);
        return;
    }
    console.log("Conexión exitosa a la base de datos.");
    connection.release(); 
});

module.exports = dbPool;

