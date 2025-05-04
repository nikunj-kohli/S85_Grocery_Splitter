const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use env in production

// Login: set JWT token in cookie
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  // Create JWT token
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

  // Set token in httpOnly cookie
  res.cookie('token', token, { httpOnly: true });
  res.json({ message: 'Logged in', token });
});

// Logout: clear the token cookie
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

module.exports = router;