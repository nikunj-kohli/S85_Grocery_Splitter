const mongoose = require('mongoose');

const splitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: String, required: true }], // Array of member names
  createdAt: { type: Date, default: Date.now }
}, { collection: 'addsplit' });

module.exports = mongoose.model('Split', splitSchema);