// Bring in JWT
const jwt = require('jsonwebtoken');
// Bring in Config
const config = require('config');

// Export a middleware function for implementing into a protected route
module.exports = function(req, res, next) {
    // Get Token from Header
    const token = req.header('x-auth-token');

    // Check if no Token
    if(!token) {
        return res.status(401).json({ msg: 'No token: authorization denied.' });
    }

    // Verify Token if there is one
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}