const express = require('express');
const { handleHomeView, handleSignupView } = require('../controllers/staticController');

const router = express.Router();

router.get('/', handleHomeView);
router.get('/home', handleHomeView);
router.get('/signup', handleSignupView)

module.exports = router;