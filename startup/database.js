const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function(){

    mongoose.connect('mongodb://localhost/vidly')
        .then(() => console.log('Connected to MongoDB...'))

}