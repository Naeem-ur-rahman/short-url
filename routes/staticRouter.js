const express = require('express');
const { restrictTo } = require('../middleware/auth')
const { handleHomeView, handleSignupView, handleLoginView, handleAdminHomeView } = require('../controllers/staticController');

const router = express.Router();

router.get('/', restrictTo(['NORMAL', 'ADMIN']), handleHomeView);
router.get('/home', restrictTo(['NORMAL', 'ADMIN']), handleHomeView);
router.get('/signup', handleSignupView);
router.get('/login', handleLoginView);
router.get('/admin/urls', restrictTo(['ADMIN']), handleAdminHomeView);

module.exports = router;