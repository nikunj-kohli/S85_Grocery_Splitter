const Split = require('../model/Split');

// Create a new split with validation
exports.createSplit = async (req, res) => {
  const { name, members } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Split name is required and must be a non-empty string.' });
  }
  if (!Array.isArray(members) || members.length === 0 || members.some(m => typeof m !== 'string' || !m.trim())) {
    return res.status(400).json({ error: 'Members must be a non-empty array of non-empty strings.' });
  }

  try {
    const split = new Split({ name: name.trim(), members: members.map(m => m.trim()) });
    await split.save();
    res.status(201).json(split);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all splits
exports.getSplits = async (req, res) => {
  try {
    const splits = await Split.find().sort({ createdAt: -1 });
    res.json(splits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a split with validation
exports.updateSplit = async (req, res) => {
  const { name, members } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Split name is required and must be a non-empty string.' });
  }
  if (!Array.isArray(members) || members.length === 0 || members.some(m => typeof m !== 'string' || !m.trim())) {
    return res.status(400).json({ error: 'Members must be a non-empty array of non-empty strings.' });
  }

  try {
    const split = await Split.findByIdAndUpdate(
      req.params.id,
      { name: name.trim(), members: members.map(m => m.trim()) },
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