require("dotenv").config();
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.port || 80;
const mailchimp = require('./views/js/mailchimp');

app.use(express.static('views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  //handle root
  res.render('index');
});

app.get('/thankyou', (req, res) => {
  //handle root
  res.render('thankyou');
});

app.get('/test', (req, res) => {
  //handle root
  res.render('test');
});

app.post('/endpoint', async function(req, res) {
  var name = req.body[0].value; 
  var email = req.body[1].value;

  var data = {}
  data.name = name;
  
  try {
    await mailchimp.addSubscriber(email, data, true);
  }catch(err){
    console.log("Mailhimp error: " + err);
    return
  }
  
  res.send({redirect: '/thankyou'});
});

app.listen(process.env.PORT || port, err => {
  if(err){
    console.log("There was a problem", err);
  }
  console.log(`Listening on port ${port}!`);
});





