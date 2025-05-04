const mongoose = require('mongoose');

const splitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: String, required: true }],
  created_by: { type: String, required: true }, // Add this line
  createdAt: { type: Date, default: Date.now }
}, { collection: 'addsplit' });

module.exports = mongoose.model('Split', splitSchema);