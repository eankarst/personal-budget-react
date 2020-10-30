const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mongoDBClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/chart_data';
app.use(bodyParser.json());
const mongoose = require('mongoose');
const budgetModel = require('./models/budget_schema');
app.use('/', express.static('public'));

app.use(cors());

// app.use("/", express.static("public"));

// app.get("/hello", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/budget", (req, res) => {
  //res.sendFile('data_file.json', {root: __dirname});
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log("Connected to the database")
    budgetModel.find({})
      .then((data)=>{
        console.log("Got Here in /budget");
        res.json(data);
        mongoose.connection.close()
        console.log("Closed the connection in /budget");
      })
      .catch((connectionError)=>{
        console.log(connectionError)
      })
  })
  .catch((connectionError)=> {
    console.log(connectionError)
  })
});

app.post('/addBudget', (req, res) => {
  console.log("Got Here");
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{   
    var newBudget = {
      title: req.body.title,
      relatedValue: req.body.relatedValue,
      color: req.body.color
    };
    console.log("Created newBudget");
    budgetModel.insertMany(newBudget)
    .then((data)=>{
      res.json(data);
      mongoose.connection.close()
      console.log("Closed mongoose connection");
    })
    .catch((connectionError)=>{
      console.log(connectionError)
    });
  })
  .catch((connectionError) => {
    console.log(connectionError)
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// // Connect to database
// mongoDBClient.connect(url, { useUnifiedTopology: true },  (operationError, dbHandler)=>{
//   if (operationError) {
//     console.log("An error has occured during the connection process");
//   } else {
//     // Perform the desired operation
//     console.log("Connected to the databse");
    
//     // Close database connection
//     dbHandler.close()
//   }
// });


// Validation

