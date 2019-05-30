const mongoose = require('mongoose');
var serviceSchema = mongoose.Schema({
  content:{
    type: String
  },
  createdDate:{
    type: Date,
    default: new Date()
  }
});
var Service = module.exports = mongoose.model('Service', serviceSchema);