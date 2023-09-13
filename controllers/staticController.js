const URL = require('../models/url')

async function handleHomeView(req, res) {
    if (!req.user) return res.redirect('/login');
    const allUrls = await URL.find({ createdBy: req.user._id });
    return res.render('home', {
        urls: allUrls,
    });
}

async function handleSignupView(req, res) {
    return res.render('signup');
}

async function handleLoginView(req, res) {
    return res.render('login');
}

module.exports = {
    handleHomeView,
    handleSignupView,
    handleLoginView,
}