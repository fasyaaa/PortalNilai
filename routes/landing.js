const express = require("express");
//const bcrypt = require("bcrypt");
const router = express.Router();
const connection = require("../config/database");

router.get("/", (req, res) => {
    console.log("Akses landing");
    res.render("landing", {title: "Landing", error: null});
  });

module.exports = router;