const express = require('express');
const router = express.Router();
const splitController = require('../controllers/splitController');

router.post('/splits', splitController.createSplit);
router.get('/splits', splitController.getSplits);
router.put('/splits/:id', splitController.updateSplit);
router.delete('/splits/:id', splitController.deleteSplit);

module.exports = router;