const connection = require("./connection.js");

//     selectAll()
const orm = {
  selectAll: (columns, table) => {
    const queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [columns, table], (err, data) => {
      if (err) {
        throw new Error(err);
      }
      console.log(data);
    });
  }
};

//     updateOne()

module.exports = orm;
