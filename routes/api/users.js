// Bring in express
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// Bring in Express Validator
const { check, validationResult } = require('express-validator');
// Bring in User Model
const User = require('../../models/User');

// @route POST api/users
// @desc Register User
// @access Public
router.post('/', 
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
    .isLength({ min: 6 })
],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
    // See if the User exists
    let user = await User.findOne({ email });

    if(user) {
        return res.status(400).json({ errors: [ { msg: 'User already exists' }] });
    }

    // Get User's Gravatar
    const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
    })

    user = new User({
        name,
        email,
        avatar,
        password
    });
    // Encrypt the Password
    const salt = await bcrypt.genSalt(10);

    // Hash the Password
    user.password = await bcrypt.hash(password, salt);

    // Save User to DB
    await user.save();

    // Return the jsonwebtoken


    res.send('User registered');

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    

    
});

// Export Route
module.exports = router;