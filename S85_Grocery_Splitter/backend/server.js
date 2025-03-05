require('dotenv').config({ path: './config/.env' }); // Load .env variables

const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
const { connectDatabase } = require('./db/database');
const routes = require('./routes'); // Import routes

const PORT = process.env.PORT || 5000;

connectDatabase();

app.use('/api', routes);


const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
