const path = require('path');
const Service = require('../database/models/Service');
module.exports = (req, res)=>{
  console.log("Time to store data");
  const data = req.body;
  let image = req.files.bgImage;
  const location = path.resolve(__dirname, '../public/img',image.name);
  console.log(location);
  image.mv(location, (err)=>{
    if(err){  throw err; return res.redirect('../failed')}
    console.log("Image is moved");
    Service.create({
        ...req.body,
        bgImage: location
      }, (err, data)=>{
      if(err){  
        console.error("Error in schema");
        return res.redirect('../failed');
      }
      return res.redirect('../successfullyAdded');
    })
  })
}