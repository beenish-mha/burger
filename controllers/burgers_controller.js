const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    const hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", (req, res) => {
  burger.create(req.body.burger_name, result => {
    console.log("anything please" + result);
    res.redirect("/");
  });
});

module.exports = router;
