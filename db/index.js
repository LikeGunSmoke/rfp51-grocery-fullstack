const mysql = require("mysql");
//var connection = mysql.createConnection({debug: true})
const connection = mysql.createConnection({
  host:"localhost",
  user: "student",
  password: "student",
  database: "groceries"
});

connection.connect();

module.exports = connection;
