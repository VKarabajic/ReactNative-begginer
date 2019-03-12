import express from 'express';
import bodyParser from 'body-parser';
//import bodyParser from 'body-parser';
//we should run app.js with the node_modules/.bin/babel-node app.js so th can compile it to ES5
// Set up the express app
const app = express();

//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/', (req, res) => { //req = object which contains information about our request //res= info about the response and methods we can use to send information back to the client
    res.status(200).send( //res.send= send back a response to the client, in this canse we send back an object which contains some info
        "hello"
    )
});


const PORT = 3000;

app.listen(PORT, () => { //app.listen creates a web server for us //first paramater is port, second we can call a function of what should happen when server gets created
    console.log(`server running on port ${PORT}`)
});

