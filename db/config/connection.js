var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Beemysql4",
  database: "cat_db"
});

connection.connect(err => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
