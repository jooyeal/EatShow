var mysql = require("mysql");
const database = mysql.createPool({
  host: "db-eatshow.cc9lbgjfirc2.ap-northeast-1.rds.amazonaws.com",
  port: "3306",
  user: "aisedu",
  password: "aisedu123!",
  database: "db-eatshow",
});

module.exports = database;
