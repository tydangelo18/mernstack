// Bring in express
const express = require('express');
const router = express.Router();
// Bring in Auth Middelware
const auth = require('../../middleware/auth');
// Bring in User and Profile Models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current user's profile 
// @access Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        ['name', 'avatar']);

        // Check for no profile
        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        // Check if there is a profile
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Export Route
module.exports = router;