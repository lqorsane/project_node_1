const express = require('express');
const app     = express();
const fs      = require('fs');
const { posts } = require('./routes/post');
const errHandler  = err  => console.log(err); 
const dataHandler = data => console.log(data);
const target = "target.txt";

fs.readFile( target, 'utf-8', (err, data) => {
    if(err) console.error('Sorry!');
    app.get('/', (req, res) => {
        res.send(data);
    }).listen(3000);
} );