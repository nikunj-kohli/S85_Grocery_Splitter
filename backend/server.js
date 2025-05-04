require('dotenv').config({ path: './config/.env' }); // Load .env variables

const express = require('express');
const { connectDatabase } = require('./db/database'); // Adjust the path if needed
const splitRoutes = require('./routes/splitRoutes');


const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use('/api', splitRoutes);8

// Connect to MongoDB
connectDatabase();

// Use routes

// Create and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
