 const db = require("../db/index.js");

var getList = (callback) => {
  db.query('SELECT * FROM list', (err, result) => {
    if (err) {
      console.error('FAILED TO CONNECT');
      db.end();
    } else {
      callback(result);
      db.end();
    }
  })
};
module.exports = getList;
