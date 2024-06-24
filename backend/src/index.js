const express = require('express');
require('dotenv').config();
const app = express();

const PORT = require('./constants/api');

//starting the server
app.listen(PORT, () =>{
    console.log(process.env.DATABASE_PASSWORD);
    console.log(`Server on port ${PORT}`);
});