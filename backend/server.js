const http = require('http');
const app = require('./app'); // Assuming app is exported from app.js

const PORT = process.env.PORT || 5000; // Default port is 5000 if no environment variable is set

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
