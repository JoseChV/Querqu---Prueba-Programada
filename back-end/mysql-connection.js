const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3444498",
  password: "iznYVXsUha",
  database: "sql3444498",
});

const connect = () => {
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
  });
};
exports.connect = connect;

const end = () => {
  connection.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Close the database connection.");
  });
};
exports.end = end;

const readOwners = () => {
  connection.query("SELECT * FROM Owner", (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:");
    console.log(rows);
  });
};
exports.readOwners = readOwners;

const createProperty = (
  idPropType,
  idOwner,
  number,
  address,
  area,
  construcArea
) => {
  connection.query(
    "SELECT createProperty(" +
      idPropType +
      "," +
      idOwner +
      "," +
      number +
      "," +
      address +
      "," +
      area +
      "," +
      construcArea +
      ");",
    (err, rows) => {
      if (err) throw err;

      console.log("Data received from Db:");
      console.log(rows);
    }
  );
};
exports.createProperty = createProperty;

const createPropertyType = () => {
  connection.query("SELECT createPropertyType('000');", (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:");
    console.log(rows);
  });
};
exports.createPropertyType = createPropertyType;

const deleteAll = () => {
  connection.query("SELECT deleteAll();", (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:");
    console.log(rows);
  });
};

exports.deleteAll = deleteAll;
