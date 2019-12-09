// SET UP SQL CONNECTION
const mysql = require("mysql");

const connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "clydefrog",
   database: "burger_db"
});

// MAKE CONNECTION
connection.connect(function(err) {
   if (err) {
      console.log("error connectiong: " + err.stack);
      return;
   }
   console.log("connected as id " + connection.threadId);
});

module.exports = connection;