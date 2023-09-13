const URL = require('../models/url')

async function handleHomeView(req, res) {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls,
    });
}

async function handleSignupView(req, res) {
    return res.render('signup');
}

module.exports = {
    handleHomeView,
    handleSignupView,
}