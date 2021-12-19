const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({

    name: {
        type: String,
        enum:['Action','Horror','Romance']
    }

});

const Genre = mongoose.model('Genre',genreSchema);

exports.genreSchema = genreSchema;
exports.Genre = Genre;
