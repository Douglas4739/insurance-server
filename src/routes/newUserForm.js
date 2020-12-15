const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');


router.get('/NewUserForm', )

router.post('/NewUserForm', (req, res, next) => {
    const user = new User({
        _id : mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
});


router.delete('/NewUserForm', )

module.exports = router;