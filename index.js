require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(process.env.DB_URL);
mongoose.connection;

const getCompleteDataController = require('./controllers/getCompleteData');
const createDataController = require('./controllers/createData');
const storeDataController = require('./controllers/storeData');

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get('/service-api/', getCompleteDataController);
app.get('/service-api/create', createDataController);
app.post('/service-api/create', storeDataController);
app.listen(process.env.PORT, ()=>{
  console.log(`Serever is up and listening to port ${process.env.PORT}`);
});