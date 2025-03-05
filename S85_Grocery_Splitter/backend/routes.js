const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDBFunc } = require('./db/database'); // Adjust the path as necessary
const db = require('./model/User.js'); // Adjust the path as necessary

router.use(express.json());

// Create a new item
router.post('/api/items', async (req, res) => {
    let { name, email, password } = req.body;
    const user = await db.create({
        name,
        email,
        password
    });
    res.json(user);
});

// Get all items
router.get('/items', async (req, res) => {
    console.log("GET /items request received"); // Debug log
    try {
        const users = await db.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an item by ID
router.put('/items/:id', async (req, res) => {
    try {
        const db = await getDBFunc();
        const { id } = req.params;
        const updateData = await db.collection('items').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        return res.status(200).send({ message: "Update successful", updateData });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

// Partially update an item by ID
router.patch('/items/:id', async (req, res) => {
    try {
        const db = await getDBFunc();
        const { id } = req.params;
        const updateData = await db.collection('items').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        return res.status(200).send({ message: "Partial update successful", updateData });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

// Delete an item by ID
router.delete('/items/:id', async (req, res) => {
    try {
        const db = await getDBFunc();
        const { id } = req.params;
        const deleteData = await db.collection('items').deleteOne({ _id: new ObjectId(id) });
        return res.status(200).send({ message: "Deleted successfully", deleteData });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;