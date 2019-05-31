const Service = require('../database/models/Service');
const t = (req, res)=>{
  let data = req.body;
  console.log(data);
  Service.create({content: data.content}, (err)=>{
    if(err){  throw err;}
    res.redirect('/2');
  });
}
module.exports = t;