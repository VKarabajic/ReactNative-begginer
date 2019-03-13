import User from './models/users'
import Presentation from './models/presentations'
import Feedback from './models/feedback'

const db = async (Sequelize) => {

    try {

        //db connection setup
        const sequelize = new Sequelize('weblica', 'root', 'password', {
            host: 'localhost',
            dialect: 'mysql'
        })

        try {
            //drop foreign key constraints and then drop tables
            await sequelize.query('alter table feedback drop foreign key feedback_ibfk_1;')
            await sequelize.query('alter table feedback drop foreign key feedback_ibfk_2;')
            await sequelize.query('DROP TABLE feedback, users, presentations')

        } catch (e) {
            console.log('failed to alter tables (they probably dont exist)')
        }

        //create new tables
        const user = User(sequelize, Sequelize)
        await user.sync({
            force: true
        })

        const presentation = Presentation(sequelize, Sequelize)
        await presentation.sync({
            force: true
        })

        const feedback = Feedback(sequelize, Sequelize)
        await feedback.sync({
            force: true
        })

        //fill tables
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
        console.log('OK')

    } catch (e) {
        console.log(e)
    }

}

export default db