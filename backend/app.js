const express = require('express');
const app = express();


app.get('/ping', (req, res, next) => {
  try {
    // Simulate the success response
    res.status(200).json({ message: 'pong' });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
