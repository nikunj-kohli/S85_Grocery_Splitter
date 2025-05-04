const express = require('express');
const router = express.Router();

// Login: set username in cookie
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  res.cookie('username', username, { httpOnly: true });
  res.json({ message: 'Logged in', username });
});

// Logout: clear the cookie
router.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Logged out' });
});

module.exports = router;