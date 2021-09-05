const mysql = require("mysql")

/*const pool = new mysql.ConnectionPool( 
    {
        server : "DESKTOP-BQ43HQN\\SQLEXPRESS",
        database : "administrador_de_tareas_umg",
        port: 1433,
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true
        }
    }
)*/

const conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'administrador_de_tareas_umg',
        port: 3306
    }
)

module.exports = conexion