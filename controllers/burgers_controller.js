const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/burgers/create", function (req, res) {

  burger.create(req.body.burger_name, function (result) {
    console.log(result)
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {

  burger.update(req.params.id, function (result) {
    console.log(result);
    res.status(200);

  });
});

module.exports = router;
