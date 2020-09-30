const express = require("express");
const app = express();
const port = 300;

app.use("/", express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  res.sendFile('data_file.json', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
