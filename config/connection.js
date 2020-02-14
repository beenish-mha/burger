const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Beemysql4",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
