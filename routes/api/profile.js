// Bring in express
const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('Profile route'));

// Export Route
module.exports = router;