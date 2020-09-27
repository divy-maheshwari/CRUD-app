const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  published_year: Number,
  publisher: String,
  updated_date: {
       type: Date,
       default: Date.now }
});

module.exports = mongoose.model('Book',UserSchema);