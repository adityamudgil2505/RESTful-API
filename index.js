require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.DB_URL);

app.get('/', (req, res)=>{
  res.send("HI");
});
app.listen(process.env.PORT, ()=>{
  console.log(`Listening to port ${process.env.PORT}`);
});