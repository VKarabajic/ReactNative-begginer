import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize'
import config from './config/config.js'
import presentationRouter from './routers/presentationRouter'

import Db from './db'


// Set up the express app
const app = express();



//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/presentation', presentationRouter);

const PORT = global.globalConfig.port;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

//create table and fill it
Db();