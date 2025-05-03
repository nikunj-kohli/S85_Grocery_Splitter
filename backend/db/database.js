require('dotenv').config({ path: './config/.env' });
const mongoose = require('mongoose');

// Connect to MongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectDatabase };