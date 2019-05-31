require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressEdge = require('express-edge');
const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressEdge);
app.set('views',`${__dirname}/views`);
mongoose.connect(process.env.DB_URL);
mongoose.connection;

const endPointController = require('./controllers/endPoint');
const getCompleteDataController = require('./controllers/getCompleteData');
const createDataController = require('./controllers/createData');
const storeDataController = require('./controllers/storeData');

app.get('/', endPointController);
app.get('/service-api/', getCompleteDataController);
app.get('/service-api/create', createDataController);
app.get('/successfullyAdded', (req, res)=>{
  res.render('successfullyAdded');
});
app.post('/service-api/create', storeDataController);
app.listen(process.env.PORT, ()=>{
  console.log(`Serever is up and listening to port ${process.env.PORT}`);
});