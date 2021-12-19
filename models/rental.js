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


const Rental = mongoose.model('Rental', rentalSchema);

exports.Rental = Rental;
 