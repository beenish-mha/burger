const orm = require("../config/orm.js");

const burger = {
  selectAll: cb => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },

  create: (name, cb) => {
    orm.create("burgers", "burger_name", "devoured", name, 0, cb);
  }
};

module.exports = burger;
