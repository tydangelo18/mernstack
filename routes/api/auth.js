// Bring in express
const express = require('express');
const router = express.Router();
// Bring in Auth Middleware
const auth = require('../../middleware/auth');
// Bring in User Model
const User = require('../../models/User');

// @route GET api/auth
// @desc Test Route
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Export Route
module.exports = router;