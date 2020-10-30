const mongoose = require("mongoose")

const chartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  relatedValue: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
  }
}, { collection: 'categories' });

module.exports = mongoose.model('categories', chartSchema)