const express = require("express");
const database = require("../config/database");
const router = express.Router();

router.post("/login", function (req, res) {
  const userId = req.body.userId;
  const userPassword = req.body.userPassword;
  database.query(
    `SELECT * FROM user WHERE userId = ? AND userPassword = ?`,
    [userId, userPassword],
    (err, data) => {
      if (data[0] === undefined || err) {
        res.json({ error: "error occured!" });
      } else res.json({ user: data });
    }
  );
});

module.exports = router;
