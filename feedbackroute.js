const express = require('express');
const router = express.Router();
const {getFeedback, setFeedback, getAllFeeds ,deleteAllFeedback} = require('./feedbackcontroller');

router.get('/feedback',getAllFeeds,getFeedback);
router.post('/feedback',setFeedback);
router.delete('/feedback',deleteAllFeedback);

module.exports = router;