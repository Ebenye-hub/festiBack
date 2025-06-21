const mongoose = require('mongoose');

const eventHallSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  address: String,
  phone: String,
  capacity: Number,
  description: String,
  services: [String],
}, { timestamps: true });

module.exports = mongoose.model('EventHall', eventHallSchema);
