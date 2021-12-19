const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({

    isGold:Boolean,
    name:String,
    phone:Number
    
});

const Customer = mongoose.model('Customer', customerSchema);

exports.Customer = customerSchema;
exports.Customer = Customer;