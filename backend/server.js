require('dotenv').config({ path: './config/.env' }); // Load .env variables

const express = require('express');
const routes = require('./routes');
const { connectDatabase } = require('./db/database'); // Adjust the path if needed

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Use routes
app.use('/api', routes);

// Create and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
