// Bring in express
const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('Posts route'));

// Export Route
module.exports = router;