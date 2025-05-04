const Split = require('../model/Split');

// Create a new split
exports.createSplit = async (req, res) => {
  try {
    const { name, amount } = req.body;
    const split = new Split({ name, amount });
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