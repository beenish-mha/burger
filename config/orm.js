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
  }
};

//     updateOne()

module.exports = orm;
