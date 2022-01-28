
const router = require("express").Router();
const { datanotes } = require("../../db/db");

router.get('/notes', (req, res) =>{
    let result = datanotes; 
   
    res.send('Hello!');
    // res.json(result);
});

module.exports = router;    