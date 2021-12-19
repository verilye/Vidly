const {Rental} = require('../models/rental');
const {Customer} = require('../models/customer');
const {Movie} = require('../models/movie');
const mongoose = require ('mongoose');

const express = require('express');
const router  = express.Router();

router.post('/', async (req,res)=>{
    const customer =await Customer.findById(req.body.customerId);
    const movie = await Movie.findById(req.body.movieId);

    let rental = new Rental({

        movie:{
            
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
    
        },
    
        customer:{
            
            _id: customer._id,
            name: customer.name, 
            phone: customer.phone
    
        },
    
        dateDue:req.body.dateDue

    });

    try{

        rental = await rental.save();
        movie.numberInStock--;
        movie.save();
        res.send(rental);

        /*

        //Transactions are unable to be created on mongodb standalone
        //servers. You need to install a replica server, so for learning
        // and testing purposes I wont use transactions 
        const session = await mongoose.startSession();

        session.startTransaction();
        await rental.save({session:session});
        await rental.update('movies', {_id:movie._id},{
            $inc: {numberInStock: -1}
        },{session:session});
        
        await session.commitTransaction();
        
        session.endSession();

        */

    }catch(err){

        console.log(`findOne error--> ${err}`);
        return err;

    }

    

});

router.get('/', async (req,res)=>{

    const result = await Rental.find();
    res.send(result);

});

module.exports = router;



