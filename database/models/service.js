const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
  name:{
    type: String,
  },
  age:{
    type: Number
  },
  course:{
    type: String
  },
  description:{
    type: String
  },
  bgImage:{
    type:String
  }
});
var Service = module.exports = mongoose.model('Service', serviceSchema);
