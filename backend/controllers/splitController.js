const Split = require('../model/Split');

// Create a new split
exports.createSplit = async (req, res) => {
  try {
    const { name, members } = req.body;
    const split = new Split({ name, members });
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

// Update a split
exports.updateSplit = async (req, res) => {
  try {
    const { name, members } = req.body;
    const split = await Split.findByIdAndUpdate(
      req.params.id,
      { name, members },
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