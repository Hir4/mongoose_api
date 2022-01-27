// Require dotenv config to get the uri to connect with mongoose
require('dotenv').config();
// Require express and mongoose to use in all the way of the application
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Connecting to mongodb
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log("Connected"));
// Recognize the request as json
app.use(express.json());

const enterpriseRouter = require('./routes/enterprise');
app.use('/enterprise', enterpriseRouter);
// Start server in 3000 port
app.listen(3000, ()=> console.log("Server started at 3000"));