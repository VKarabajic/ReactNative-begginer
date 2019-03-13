import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize'
import config from './config/config.js'

import Db from './db'


// Set up the express app
const app = express();


//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// get hello
app.get('/', (req, res) => {
    res.status(200).send(
        "hello"
    )
});

const PORT = global.globalConfig.port;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

//create table and fill it
Db(Sequelize);