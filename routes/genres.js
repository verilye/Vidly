const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Genre}= require('../models/genre');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



router.get('/', async (req,res) => {
   
        const result = await Genre.find().sort('name');
        res.send(result);
    
   
});

router.get('/:id', async (req,res) => {

        const result = await Genre.find({_id:req.params.id});
        res.send(result);

}) ;


router.put('/:id', async (req,res) => {
    
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
      });
      
      res.send(genre);
   
});

router.post('/', auth,  async (req,res) => {

    const { error } = validateGenre(req.body);

    let genre = new Genre({name:req.body.name});

    const result = await genre.save();

    
    
    res.send(genre.name);

});

router.delete('/:id',[auth, admin], async (req,res) => {

    const result = await Genre.deleteOne({_id:req.params.id});
    res.send(result);
    
});


module.exports = router;