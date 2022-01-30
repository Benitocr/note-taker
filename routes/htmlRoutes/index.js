const path = require('path');
const router = require('express').Router();


//route for GET / Notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

//route for Get *
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


module.exports = router;    