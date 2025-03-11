const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signin route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    
    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password

        if (password === user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If everything is correct, send a success response
        res.status(200).json({ message: 'Signin successful', user: { email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    try {
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;