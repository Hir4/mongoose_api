const mongoose = require('mongoose');
// Define Schema and the document
const enterpriseSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  salary:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Enterprise', enterpriseSchema);