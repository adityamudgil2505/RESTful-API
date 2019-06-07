require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressEdge = require('express-edge');
const fileUpload = require('express-fileupload');
const Service = require('./database/models/Service');

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
const successfullyAddedController = require('./controllers/successfullyAddedController');

app.get('/', endPointController);
app.get('/service-api/', getCompleteDataController);
app.get('/service-api/course/:_course', (req, res)=>{
  const course = req.params._course;
  Service.find({'course':course}, (err, data)=>{
    if(err){
      throw(err);      
      return res.render('failed');
    }
    else{
      return res.status(200).json(data);
    }
  })
});
app.get('/service-api/age/:_age', (req, res)=>{
  const age = req.params._age;
  Service.find({'age':age}, (err, data)=>{
    if(err){
      throw(err);      
      return res.render('failed');
    }
    else{
      return res.status(200).json(data);
    }
  })
});
app.get('/service-api/name/:_name', (req, res)=>{
const name = req.params._name;
  Service.find({'name':name}, (err, data)=>{
    if(err){
      throw(err);      
      return res.render('failed');
    }
    else{
      return res.status(200).json(data);
    }
  })
});
app.get('/service-api/create', createDataController);
app.get('/successfullyAdded', successfullyAddedController);
app.post('/service-api/create', storeDataController);
app.listen(process.env.PORT, ()=>{
  console.log(`Serever is up and listening to port ${process.env.PORT}`);
});