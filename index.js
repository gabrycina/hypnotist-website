"use strict";
const express = require('express')
const app = express();
var path = require('path')
const port = process.env.port || 8000;

app.use(express.static('views'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //handle root
  res.render('index');
});

app.get('/thankyou', (req, res) => {
  //handle root
  res.render('thankyou');
});

app.listen(process.env.PORT || port, err => {
  if(err){
    console.log("There was a problem", err);
  }
  console.log(`Listening on port ${port}!`);
});





