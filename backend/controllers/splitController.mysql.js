const pool = require('../db/mysql');

// Create a new split (MySQL)
exports.createSplitMySQL = async (req, res) => {
  const { name, members, created_by } = req.body;
  if (!name || !members || !created_by) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await pool.query(
      'INSERT INTO splits (name, members, created_by) VALUES (?, ?, ?)',
      [name, Array.isArray(members) ? members.join(',') : members, created_by]
    );
    res.status(201).json({ message: 'Split created (MySQL)' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all splits (MySQL)
exports.getSplitsMySQL = async (req, res) => {
  try {
    const { created_by } = req.query;
    let query = 'SELECT * FROM splits';
    let params = [];
    if (created_by) {
      query += ' WHERE created_by = ?';
      params.push(created_by);
    }
    const [splits] = await pool.query(query, params);
    splits.forEach(split => split.members = split.members.split(','));
    res.json(splits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users (MySQL)
exports.getUsersMySQL = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};