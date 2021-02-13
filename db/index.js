const mysql = require("mysql");
//var connection = mysql.createConnection({debug: true})
const connection = mysql.createConnection({
  host:"localhost",
  user: "student",
  password: "student",
  database: "groceries"
});

connection.connect();
//query arg1 = query string arg2 cb -err first cb pattern
connection.query('SELECT * FROM list', (err, result) => {
  if (err) {
    console.error('FAILED DB CONNECTION');
  } else {
    console.log(result);
  }
})

connection.end();

module.exports = connection;
