const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const {User} = require('../models/user');
const Joi = require('joi');
const router = express.Router();

router.post('/', async (req,res)=>{

    const {error} = validate(req.body);

    let user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = user.generateAuthToken();

    res.send(token);

});


function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    });

    const {value} = schema.validate(req);
    return value;
}



module.exports = router;