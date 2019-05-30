require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.DB_URL);
mongoose.connection;
const getCompleteDataController = require('./controllers/getCompleteData');
const createDataController = require('./controllers/createData');

app.get('/', (req, res)=>{
  res.send("HI");
});
app.get('/service-api/', getCompleteDataController);
app.get('/service-api/create', createDataController);
app.listen(process.env.PORT, ()=>{
  console.log(`Serever is up and listening to port ${process.env.PORT}`);
});