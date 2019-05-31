const serviceDB = require('../database/models/Service');
module.exports = async(req, res)=>{
  // const post = await serviceDB.find().populate('author');
  const post = await serviceDB.find();
  res.json(post);
}