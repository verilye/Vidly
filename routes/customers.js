const {Customer} = require('../models/customer')
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req,res) => {

    const result = await Customer.find();
    res.send(result);

});


router.get('/:id', async (req,res) => {

    const result = await Customer.find({_id:req.params.id});
    res.send(result);

});


router.put('/:id', async (req,res) => {

const result = await Customer.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });
  
  res.send(result);

});

router.post('/', async (req,res) => {

    const customer = new Customer({name:req.body.name});

    try{

        const result = await customer.save();

    }catch(ex){

        for (field in ex.errors){
            console.log(ex.errors[field].message);
        }

    }

    res.send(customer.name);



});

router.delete('/:id', async (req,res) => {

const result = await Customer.deleteOne({_id:req.params.id});
res.send(result);

});

module.exports = router;