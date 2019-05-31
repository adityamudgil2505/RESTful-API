const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
  title:{
    type: String,
    require: true,
    unique: true
  },
  price:{
    type: String,
    default: "Depending on your needs"
  },
  timeTaken:{
    type: String,
    default: "Depending on your needs"
  },
  packagesIncluded:{
    type: String
  },
  description:{
    type: String,
    require: true
  },
  content:{
    type: String,
    require: true
  },
  // author:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Admin',
  //   require: true
  // },
  createdDate:{
    type: Date,
    default: new Date()
  }
});
var Service = module.exports = mongoose.model('Service', serviceSchema);