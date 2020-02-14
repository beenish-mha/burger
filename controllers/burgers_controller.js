const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    const hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

module.exports = router;
