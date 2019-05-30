const mongoose = require('mongoose');
var serviceSchema = mongoose.Schema({
  title:{
    type: String,
    required: true,
    unique: true
  },
  createdDate:{
    type: Date,
    default: new Date()
  }
});
var Service = module.exports = mongoose.model('Service', serviceSchema);