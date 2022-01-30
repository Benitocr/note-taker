const path= require('path');
const fs = require('fs');
const router = require('express').Router();
const datanotes  = require('../../db/db.json');
const hat = require('hat');

//route for get /api/notes
router.get('/notes', (req, res) =>{
    
   
    res.sendFile(path.join(__dirname, '../../db/db.json')); 
    
});

//route for POST /api/notes
router.post('/notes', (req, res)=>{
    // uses hat for creating a unique id, and is stored in the object
    req.body.id = hat();
    datanotes.push(req.body);
    // Save the array in the file db.json
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(datanotes, null, 2)
      );



    res.json(req.body);
});
//route for DELETE /api/notes/ that receives the note to delete.
router.delete('/notes/:id', (req , res)=>{
    //for each element in the db.json array runs a fuction, and delete note clicked.     
    datanotes.forEach(deleteNote)
    // fuction that looks if the id is the one that needs to be deleted. 
    function deleteNote(item, index){
        if (item.id === req.params.id){
            
            let arraynoteremove = datanotes;
            arraynoteremove.splice(index,1);
            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(arraynoteremove, null, 2)
              );
        }
        
    }
    res.json(req.body);
});



module.exports = router;    