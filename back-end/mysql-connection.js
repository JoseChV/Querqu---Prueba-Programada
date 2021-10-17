const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3444498",
  password: "iznYVXsUha",
  database: "sql3444498",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

connection.query(
  'select createOwner("probando","desde","nodejs","a","porahi");'
);

connection.query("Select * from Owner");

connection.end(function (err) {
  if (err) {
    return console.log("error:" + err.message);
  }
  console.log("Close the database connection.");
});
