// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
const endpoint = '/GroceryList';
const retrieve = require("../query/index.js");
app.use(cors());

app.get(endpoint, (req, res) => {
  res.status(200).send('SUCCESS');
})

app.get('/', (req, res) => {
  retrieve.getList((err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  })
})
// app.get(db.query('SELECT * FROM list', (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result);
//   }
// }))
app.listen(port, () => {
  console.log("listening on 8080");
});