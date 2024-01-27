const express = require('express');
const connectDB = require('./confid/db');

require('dotenv').config();

const app  = express();
const PORT  =process.env.PORT ||8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT,()=>{console.log(`Server is runnig on port ${PORT}`)});