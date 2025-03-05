require('dotenv').config(); // Load .env variables
const express = require('express');
const mongoose = require('mongoose');
const { User, Group, Expense, Payment, ShoppingList, Notification } = require('./schema'); // Import schemas

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Test Route
app.get('/', (req, res) => {
  res.send({ message: "API is running..." });
});

// ✅ Create User
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created!", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get All Users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get User by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update User
app.put('/users/:id', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, password }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete User
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
