const express = require('express');
const router = express.Router();
const {getFeedback, setFeedback} = require('./feedbackcontroller');

router.get('/feedback',getFeedback);
router.post('/feedback',setFeedback);

module.exports = router;