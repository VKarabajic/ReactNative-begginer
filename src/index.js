import express from 'express';
import router from './routers/router'
import config from './config/config.js'
import Db from './db'


// Set up the express app
const app = express()
//set up routes for endpoints
router(express, app)

const PORT = global.globalConfig.port;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

//create table and fill it
Db()