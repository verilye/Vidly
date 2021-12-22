const Joi = require('joi');
const mongoose = require('mongoose');


const rentalSchema = new mongoose.Schema({

    movie:{
       type: new mongoose.Schema({
            title: String,
            dailyRentalRate: Number
       })
    }, 

    customer:{
        type: new mongoose.Schema({
            
            name:String,
            phone:String

        })
    },

    dateDue:Date
});

function validateRental(rental) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().require()
    };
    return Joi.validate(rental, schema);
}


const Rental = mongoose.model('Rental', rentalSchema);

exports.Rental = Rental;
exports.Rental = validateRental; 