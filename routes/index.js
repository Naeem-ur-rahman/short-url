const express = require('express');
const { handleRedirectRequest } = require('../controllers/index');

const router = express.Router();

router.get('/:shortId', handleRedirectRequest);

module.exports = router;