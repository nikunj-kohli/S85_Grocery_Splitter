require('dotenv').config({ path: './config/.env' });

const express = require('express');
const splitRoutes = require('./routes/splitRoutes'); // MongoDB routes
const splitRoutesMySQL = require('./routes/splitRoutes.mysql'); // MySQL routes
const { connectDatabase } = require('./db/database');


const app = express();

app.use(express.json());
app.use('/api', splitRoutes); // MongoDB endpoints
app.use('/api', splitRoutesMySQL); // MySQL endpoints

connectDatabase();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});