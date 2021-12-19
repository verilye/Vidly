const {Genre}= require('../models/genre');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req,res) => {

    const result = await Genre.find();
    res.send(result);

});

router.get('/:id', async (req,res) => {

        const result = await Genre.find({_id:req.params.id});
        res.send(result);

});


router.put('/:id', async (req,res) => {
    
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
      });
      
      res.send(genre);
   
});

router.post('/', async (req,res) => {

    const genre = new Genre({name:req.body.name});

    try{

        const result = await genre.save();

    }catch(ex){
    
        for (field in ex.errors){
            console.log(ex.errors[field].message);
        }

    }
    
    res.send(genre.name);



});

router.delete('/:id', async (req,res) => {

    const result = await Genre.deleteOne({_id:req.params.id});
    res.send(result);
    
});


module.exports = router;