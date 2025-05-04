// filepath: e:\github\ASAP\S85_Grocery_Splitter\backend\showUsers.js
const pool = require('./db/mysql');
async function showUsers() {
  const [rows] = await pool.query('SELECT * FROM users');
  console.log(rows);
  process.exit(); // so the script exits after printing
}

showUsers();