const path= require('path');
const router = require('express').Router();
const { datanotes } = require('../../db/db.json');


router.get('/notes', (req, res) =>{
    let result = datanotes; 
   
    res.sendFile(path.join(__dirname, '../../db/db.json')); 
    // res.json(result);
});

module.exports = router;    