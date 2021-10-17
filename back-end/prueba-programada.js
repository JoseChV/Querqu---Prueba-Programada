const express = require("express");
const app = express();

app.post("/post", (req, res) => {
  console.log("Connected to React");
  connection.connect();
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
