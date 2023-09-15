const jwt = require('jsonwebtoken')
const secret = 'Naeem@*99$s';

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret)
}

function getUser(tokken) {
    if (!tokken) return null;

    try {
        return jwt.verify(tokken, secret)
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}