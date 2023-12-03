const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery',false);

var routes = require('./route/cartroutes','./route/checkoutroutes','./route/contactroute','./route/userroutes');

var cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
  });
app.listen(3005,function check(error){
    if(error)
    console.log("Error........");
    else
    console.log("Started");
});




mongoose.connect('mongodb://127.0.0.1:27017/lenzkart');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Failed to connect with db');
});
db.once('open', () => {
    console.log('Connected with db');
});

  app.use(express.json());
  app.use(routes);