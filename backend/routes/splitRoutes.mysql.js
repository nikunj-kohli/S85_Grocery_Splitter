const express = require('express');
const router = express.Router();
const splitController = require('../controllers/splitController.mysql');

router.post('/splits-mysql', splitController.createSplitMySQL);
router.get('/splits-mysql', splitController.getSplitsMySQL);
router.get('/users-mysql', splitController.getUsersMySQL);

module.exports = router;