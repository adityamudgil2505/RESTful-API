const Service = require('../database/models/Service');
const path = require('path');
var t = (req, res)=>{
  console.log(path.resolve(__dirname, "index.html"));
  res.sendFile(path.resolve(__dirname, "../index.html"));  
}
module.exports = t;