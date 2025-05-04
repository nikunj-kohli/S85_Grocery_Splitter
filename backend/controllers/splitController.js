const Split = require('../model/Split');

// Create a new split with validation and created_by
exports.createSplit = async (req, res) => {
  const { name, members, created_by } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Split name is required and must be a non-empty string.' });
  }
  if (!Array.isArray(members) || members.length === 0 || members.some(m => typeof m !== 'string' || !m.trim())) {
    return res.status(400).json({ error: 'Members must be a non-empty array of non-empty strings.' });
  }
  if (!created_by || typeof created_by !== 'string' || !created_by.trim()) {
    return res.status(400).json({ error: 'created_by is required and must be a non-empty string.' });
  }

  try {
    const split = new Split({
      name: name.trim(),
      members: members.map(m => m.trim()),
      created_by: created_by.trim()
    });
    await split.save();
    res.status(201).json(split);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all splits, with optional filter by created_by
exports.getSplits = async (req, res) => {
  try {
    const filter = {};
    if (req.query.created_by) {
      filter.created_by = req.query.created_by;
    }
    const splits = await Split.find(filter).sort({ createdAt: -1 });
    res.json(splits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a split with validation
exports.updateSplit = async (req, res) => {
  const { name, members, created_by } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Split name is required and must be a non-empty string.' });
  }
  if (!Array.isArray(members) || members.length === 0 || members.some(m => typeof m !== 'string' || !m.trim())) {
    return res.status(400).json({ error: 'Members must be a non-empty array of non-empty strings.' });
  }
  if (!created_by || typeof created_by !== 'string' || !created_by.trim()) {
    return res.status(400).json({ error: 'created_by is required and must be a non-empty string.' });
  }

  try {
    const split = await Split.findByIdAndUpdate(
      req.params.id,
      {
        name: name.trim(),
        members: members.map(m => m.trim()),
        created_by: created_by.trim()
      },
      { new: true }
    );
    res.json(split);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a split
exports.deleteSplit = async (req, res) => {
  try {
    await Split.findByIdAndDelete(req.params.id);
    res.json({ message: 'Split deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};