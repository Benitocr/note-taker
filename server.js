const apiRoutes = require('./Develop/routes/apiRoutes'); 
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
// app.use(express.json());
// app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

const { notes } = require('./Develop/db/db');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Note Taker API server now on port ${PORT}!`);
});

