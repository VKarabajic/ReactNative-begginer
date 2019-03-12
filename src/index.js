import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize'

import User from './models/users'
import Presentation from './models/presentations'
import Feedback from './models/feedback'


// Set up the express app
const app = express();

//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/', (req, res) => {
    res.status(200).send(
        "hello"
    )
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});


const  db = async () => {

    //db connection setup
    const sequelize = new Sequelize('weblica', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    })

    try{
        await sequelize.query('alter table feedback drop foreign key feedback_ibfk_1;')
        await sequelize.query('alter table feedback drop foreign key feedback_ibfk_2;')
        await sequelize.query('DROP TABLE feedback, users, presentations')

    }catch(e){
        console.log('failed to alter tables(they probably dont exist)')
    }

    //drop table users and create new one
    const user = User(sequelize, Sequelize)
    await user.sync({force: true})

    const presentation = Presentation(sequelize, Sequelize)
    await presentation.sync({force: true})

    const feedback = Feedback(sequelize, Sequelize)
    await feedback.sync({force: true})


    await user.create({
        first_name: 'ime',
        last_name: 'prezime',
        email: 'mail@mail.com',
        phone: '777-7777-7777',
        annonymous: 1
    })

    await presentation.create({
        name: 'prezentacija 1',
        speaker: 'Roberto Kedmenec',
        duration: 30,
        start: Date.now()
    })

    await feedback.create({
        presentation_id: 1,
        user_id: 1,
        rating: 10,
        comment: 'Sve je dobro'
    })

}

db();