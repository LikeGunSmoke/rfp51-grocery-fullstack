// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
const endpoint = '/GroceryList';
app.use(cors());

app.get(endpoint, (req, res) => {
  res.status(200).send('SUCCESS');
})

app.listen(port, () => {
  console.log("listening on 8080");
});