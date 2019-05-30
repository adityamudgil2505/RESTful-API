const Service = require('../database/models/service');
var t = (req, res)=>{
  Service.create({title: "GSt"}, (data)=>{
    console.log(data);
    res.send(data);
  });
}
module.exports = t;