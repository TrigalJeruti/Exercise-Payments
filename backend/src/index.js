const express = require('express');
require('dotenv').config();
const app = express();

const PORT = require('./constants/api');


/* import PORT from './constants/api' */

/* const morgan = require('morgan');
const cors = require('cors'); */
const config_ = require('./config/database');


(async () => {
    try{
        await config_.authenticate()
        console.log("Conectados a la base de datos");
    }catch (error){
        throw new Error(error);
    }

})();





//middlewares
/* app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors()); */



//routes
/* app.use(require('./routes/index'));
app.use('/users', require('./routes/user'));
app.use('/oauth', require('./routes/oauth')); */
    



//starting the server
app.listen(PORT, () =>{
    console.log(process.env.DATABASE_PASSWORD);
    console.log(`Server on port ${PORT}`);
});