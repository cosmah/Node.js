"use strict";

var express = require('express');

var router = express.Router();
router.get("../views/contact", function (req, res) {
  res.render("contact");
});
module.exports = router;