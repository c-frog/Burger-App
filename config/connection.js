// SET UP SQL CONNECTION
const mysql = require("mysql");
require("dotenv").config()
let connection;

// MAKE CONNECTION
if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: process.env.USER_NAME,
      password: process.env.USER_PASSWORD,
      database: "burger_db"
   });
}

connection.connect(function(err) {
   if (err) {
      console.log("error connectiong: " + err.stack);
      return;
   }
   console.log("connected as id " + connection.threadId);
});

module.exports = connection;