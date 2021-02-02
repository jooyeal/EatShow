const express = require("express");
const database = require("../config/database");
const router = express.Router();

router.get("/login", function (req, res) {
  database.query("SELECT * FROM user", (err, data) => {
    if (!err) res.json({ user: data });
    else res.send(err);
  });
});

module.exports = router;
