const express = require("express");
const connection = require("./mysql-connection");

const app = express();

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/createProperty/post", (req, res) => {
  console.log("PROPERTY");
  var idPropType = document.getElementById("idPropType");
  var owner = document.getElementById("owner");
  var number = document.getElementById("number");
  var address = document.getElementById("address");
  var area = document.getElementById("area");
  constructionArea = document.getElementById("constructionArea");

  connection.createProperty(
    idPropType,
    owner,
    number,
    address,
    area,
    constructionArea
  );

  res.redirect("/");
});

app.post("/createOwner/post", (req, res) => {
  console.log("OWNER");
  res.redirect("/");
});

app.post("/createPropertyType/post", (req, res) => {
  connection.createPropertyType();

  res.redirect("/");
});

app.post("/DELETE/post", (req, res) => {
  connection.deleteAll();

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/createProperty/", (req, res) => {
  console.log("GET PROPERTY");
  res.redirect("/createProperty/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
