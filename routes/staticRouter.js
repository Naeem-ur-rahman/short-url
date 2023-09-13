const express = require('express');
const { handleHomeView, handleSignupView ,handleLoginView} = require('../controllers/staticController');

const router = express.Router();

router.get('/', handleHomeView);
router.get('/home', handleHomeView);
router.get('/signup', handleSignupView);
router.get('/login', handleLoginView);

module.exports = router;