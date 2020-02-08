const express = require("express");
const exphBar = require("express-handlebars");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log("Listning on " + PORT);
});
