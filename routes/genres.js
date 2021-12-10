const express = require('express');
const mongoose = require('mongoose');
router = express.Router();

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.log(new Error('Could not connect to mongo db', err)))

const genreSchema = new mongoose.Schema({

    name: {
        type: String,
        enum:['Action','Horror','Romance']
    }

});

const Genre = mongoose.model('Genre', genreSchema);


router.get('/', (req,res) => {

    res.send('Health Check');

});

router.get('/api/genres', (req,res) => {

   async function getAllGenres(){

        const genres = await Genre
            .find();
        

        res.send(genres);

   } 
   getAllGenres();
   

});

router.get('/api/genres/:id', (req,res) => {

    async function getGenre(){
        const result = await Genre
            .find({_id:req.params.id});

        res.send(genre);
    }
    getGenre();

});


router.put('/api/genres/:id', (req,res) => {

    async function putGenre(){

        const result = await Genre.updateOne({_id:req.params.id});

        console.log(result);


        res.send(result);

    }   
    putGenre();

});

router.post('/api/genres', (req,res) => {

    

    async function createGenre(){
        
        const genre = new Genre({

            name:req.body.name
        
        });

        try{

            const result = await genre.save();
            console.log(genre);
    
        }catch(ex){
        
            for (field in ex.errors){
                console.log(ex.errors[field].message);
            }
    
        }
        res.send(genre);
    }
   

    createGenre();



});

router.delete('/api/genres/:id', (req,res) => {

    

    async function deleteGenre(){

        const result = await Genre.deleteOne({_id:req.params.id});

        console.log(result);

        res.send(result);

    }

    deleteGenre();
    
});





module.exports = router;