require('dotenv').config()
const express = require("express");

const  connectDB = require('./dbinit');
const albums = require('./api/albums');

const errorHandler = require('./middleware/error');
const app = express();

connectDB();

app.use(express.json());
app.use('/albums', albums);

app.use(errorHandler);

app.listen('5000', () => console.log('connected'));

