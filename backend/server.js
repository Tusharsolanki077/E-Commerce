const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require("./config/database")

// congif

dotenv.config({path:"backend/config/config.env"});

// connecting database

connectDatabase()



app.listen(process.env.PORT,()=>{
    console.log(`Server is woking on http://localhost:${process.env.PORT}`)
})