const path= require('path');
const fs = require('fs');
const router = require('express').Router();
const datanotes  = require('../../db/db.json');


router.get('/notes', (req, res) =>{
    let result = datanotes; 
   
    res.sendFile(path.join(__dirname, '../../db/db.json')); 
    // res.json(result);
});

router.post('/notes', (req, res)=>{
    req.body.id = datanotes.length.toString();
    datanotes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(datanotes, null, 2)
      );



    res.json(req.body);
});




module.exports = router;    