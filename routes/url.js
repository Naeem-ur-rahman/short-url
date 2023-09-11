const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics , handleRedirectRequest } = require('../controllers/url')

const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleRedirectRequest);
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;