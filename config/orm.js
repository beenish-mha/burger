const connection = require("./connection.js");

//     selectAll()
const orm = {
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, data) => {
      if (err) {
        throw new Error(err);
      }
      console.log(data);
      cb(data);
    });
  },

  create: (table, col1, col2, val1, val2, cb) => {
    const queryString =
      "INSERT INTO " +
      table +
      " (" +
      col1 +
      " , " +
      col2 +
      ")" +
      " VALUE ('" +
      val1 +
      "', '" +
      val2 +
      "');";
    connection.query(queryString, function(err, result) {
      console.log("beenish ---- " + queryString);
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
