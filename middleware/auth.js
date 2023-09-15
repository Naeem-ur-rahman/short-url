const { getUser } = require('../service/auth');

function checkForAuthentication(req, res, next) {
    const tokkenCookie = req.cookies?.tokken;
    req.user = null;
    
    if (!tokkenCookie) return next()
    
    const tokken = tokkenCookie;
    const user = getUser(tokken);
    
    req.user = user;
    next();
}

function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login');
        if (!roles.includes(req.user.role)) return res.end("UnAuthorized")

        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo,
}