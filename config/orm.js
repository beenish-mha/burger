const connection = require("./connection.js");

//     selectAll()
const orm = {
  selectAll: (columns, table) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [columns, table], (err, data) => {
      if (err) {
        throw new Error(err);
        console.log("error is here beenish");
      }
      console.log(data);
    });
  },

  insertOne: () => {
    const queryString = " INSERT INTO ??";
  }
};
//     updateOne()

module.exports = orm;
