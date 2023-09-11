const express = require('express');
const { handleHomeView } = require('../controllers/staticController');

const router = express.Router();

router.get('/', handleHomeView);
router.get('/home', handleHomeView);

module.exports = router;