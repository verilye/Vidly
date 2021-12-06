express = require('express');
router = express.Router();


const genres =[
    { id:1, name:'horror'},
    { id:2, name:'comedy'},
    { id:3, name:'romance'},

]


router.get('/', (req,res) => {

    res.send('Health Check');

});

router.get('/api/genres', (req,res) => {

    res.send(genres);

});

router.get('/api/genres/:id', (req,res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));

    res.send(genre);

});


router.put('/api/genres/:id', (req,res) => {


    const genre = genres.find(g => g.id === parseInt(req.params.id));

    genre.name = req.body.name;


    res.send(genre);



});

router.post('/api/genres', (req,res) => {


    const genre = {

        id:genres.length + 1,
        name:req.body.name
    }

    genres.push(genre);
    res.send(genre);



});

router.delete('/api/genres/:id', (req,res) => {

    const genre = genres.find(g =>g.id === parseInt(req.params.id));

    const index  = genres.indexOf(genre);

    genres.splice(index,1);
    res.send(genre);


});

module.exports = router;