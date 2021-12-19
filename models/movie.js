const {genreSchema} = require('./genre');
const mongoose = require('mongoose');



const movieSchema =  new mongoose.Schema({

    title:{
        type:String
    },
    genre:{
        type:genreSchema
    },
    numberInStock: Number,
    dailyRentalRate: Number
 


});

const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = movieSchema;
exports.Movie = Movie;