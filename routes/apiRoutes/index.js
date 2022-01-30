const path= require('path');
const fs = require('fs');
const router = require('express').Router();
const datanotes  = require('../../db/db.json');
const hat = require('hat');


router.get('/notes', (req, res) =>{
    let result = datanotes; 
   
    res.sendFile(path.join(__dirname, '../../db/db.json')); 
    // res.json(result);
});

router.post('/notes', (req, res)=>{
    req.body.id = hat();
    datanotes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(datanotes, null, 2)
      );



    res.json(req.body);
});

router.delete('/notes/:id', (req , res)=>{
    console.log("in Delete ");
    console.log(req.params.id);
    datanotes.forEach(deleteNote)

    function deleteNote(item, index){
        if (item.id === req.params.id){
            console.log(index);
            let arraynoteremove = datanotes;
            arraynoteremove.splice(index,1);
            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(arraynoteremove, null, 2)
              );
        }
        console.log(index + "fuera de if")
    }
    res.json(req.body);
});



module.exports = router;    