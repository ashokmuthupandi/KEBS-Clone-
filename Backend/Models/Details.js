const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name:String,
  month: String,
  costCenter: String,
  Location: String,
  Week: String,
  Dates: [{
    date: String,
    value: String,
  }],
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;