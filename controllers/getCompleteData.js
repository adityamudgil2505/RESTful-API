const Service = require('../database/models/service');
var t = (req, res)=>{
  const temp = Service.find((err, data)=>{
    if(err){  throw err;}
    console.log(data);
    res.json(data);
  })
}
module.exports = t;