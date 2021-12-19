const {Movie} = require('../models/movie');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async(req,res)=>{

    const result = await Movie.find();
    res.send(result);

});

router.get('/:id', async (req,res) =>{

    const result = await Movie.find({_id:req.params.id});
    res.send(result);

});

router.put('/:id', async (req,res) =>{

    const result = await Movie.findByIdAndUpdate(req.params.id,{name: req.body.name},{

        new:true

    });



});

router.post('/', async (req,res) => {

    const movie = new Movie({
        
        title:req.body.title,
        genre:req.body.genre.name,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    
    
    });
    
    try{
    
        const result = await movie.save();
    
    }catch(ex){
    
        for (field in ex.errors){
            console.log(ex.errors[field].message);
        }
    
    }
    
    res.send(movie.name);
    
    
    
    });

router.delete('/:id', async (req,res) => {

    const result = await Movie.deleteOne({_id:req.params.id});
    res.send(result);

});
    
module.exports = router;