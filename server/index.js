


const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const path = require('path');
const app = express();

require("dotenv").config({
    path: path.resolve(__dirname, '../.env')
});

const UserModel = require('./models/userModel');

// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(cors());


app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


const userRoutes = require('./routes/user');


app.use('/api/user', userRoutes);



// app.use((req, res) => {
//     res.status(200).send('Hello, World!');
// });

mongoose.connect('mongodb+srv://elinashirinyan:fnQj0vj489WHT1gR@cluster0.ra3cpee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('💽 Database connected');
        app.listen(8080, () => {
            console.log("server is listening...on port", 8080);
        });
    })
    .catch(error => {
        console.log(error)
        console.error('Database connection failed :((')
    })





