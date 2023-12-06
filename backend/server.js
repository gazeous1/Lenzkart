const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const routes = require('./route/userroutes');
const contactRoutes = require('./route/contactroute');
const cartRoutes = require('./route/cartroutes');
const checkoutRoutes = require('./route/checkoutroutes');


mongoose.set('strictQuery', false);

app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
});

app.listen(3005, function check(error) {
    if (error)
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
app.use(cors()); // Enable CORS for all routes
app.use(routes); // Use user routes
app.use(contactRoutes); // Use contact routes
app.use(cartRoutes);
app.use(checkoutRoutes);
