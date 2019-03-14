import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter'
import feedbackRouter from './routers/feedbackRouter'
import presentationRouter from './routers/presentationRouter'
import Db from './db'


// Set up the express app
const app = express()

app.use('/user', userRouter)
app.use('/feedback', feedbackRouter)
app.use('/presentation', presentationRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


const PORT = global.globalConfig.port;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

//create table and fill it
Db();