const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// app.use("/", express.static("public"));

// app.get("/hello", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/budget", (req, res) => {
  res.sendFile('data_file.json', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
