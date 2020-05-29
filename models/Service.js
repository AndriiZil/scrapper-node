const { Schema, model } = require('mongoose');

const ServiceSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  status: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});


module.exports = model('Service', ServiceSchema);