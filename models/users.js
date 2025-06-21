const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'prestataire'], required: true },
  salleInfo: {
    name: String,
    location: String,
    capacity: Number,
    description: String,
    disponibilite: [Date]
  },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
const User = mongoose.model('User', userSchema);

module.exports = User;
