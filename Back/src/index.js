const express = require('express');
const server = express();
const routes = require('./routes/index.routes');
const { conn } = require('../src/database');

//midleweares
server.use(express.json());
server.use(express.urlencoded({extended: false}));


//Routes
server.use(routes);


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    server.listen(3002, () => {
      console.log('Server on port 3002'); // eslint-disable-line no-console
    });
});