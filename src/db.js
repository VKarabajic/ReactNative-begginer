import User from './models/users'
import Presentation from './models/presentations'
import Feedback from './models/feedback'
import Tracks from './models/tracks'
import Sequelize from 'sequelize'

const db = async () => {
    try {
        const dbConfig = global.config
        //db connection setup
        const sequelize = new Sequelize(
            dbConfig.database,
            dbConfig.mysql_user,
            dbConfig.mysql_password,
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        )

        try {
            //drop foreign key constraints and then drop tables
            await sequelize.query(
                'alter table feedbacks drop foreign key feedbacks_ibfk_1;'
            )
            await sequelize.query(
                'alter table feedbacks drop foreign key feedbacks_ibfk_2;'
            )
            await sequelize.query(
                'DROP TABLE feedbacks, users, presentations, tracks'
            )
        } catch (e) {
            console.log('Failed to drop tables')
        }

        //create new tables
        const user = User(sequelize, Sequelize)
        const presentation = Presentation(sequelize, Sequelize)
        const feedback = Feedback(sequelize, Sequelize)
        const tracks = Tracks(sequelize, Sequelize)

        //set associations
        presentation.hasMany(feedback, {
            foreignKey: 'presentation_id',
            onDelete: 'cascade'
        })
        user.hasMany(feedback, {
            foreignKey: 'user_id',
            onDelete: 'cascade'
        })

        feedback.belongsTo(user, {
            foreignKey: 'user_id'
        })

        feedback.belongsTo(presentation, {
            foreignKey: 'presentation_id'
        })

        user.hasMany(tracks, {
            foreignKey: 'user_id'
        })

        tracks.belongsTo(user, {
            foreignKey: 'user_id'
        })

        //sync tables
        await user.sync({
            force: true
        })

        await presentation.sync({
            force: true
        })

        await feedback.sync({
            force: true
        })

        await tracks.sync({
            force: true
        })

        //fill tables
        await user.create({
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@mail.com',
            phone: '777-7777-7777',
            annonymous: 0
        })

        await user.create({
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'jane.doe@mail.com',
            phone: '888-8888-8888',
            annonymous: 0
        })

        await presentation.create({
            name: 'prezentacija 1',
            speaker: 'Roberto Kedmenec',
            duration: 30,
            start: Date.now()
        })

        await presentation.create({
            name: 'prezentacija 2',
            speaker: 'Vanda Karabajic',
            duration: 40,
            start: Date.now()
        })

        await feedback.create({
            presentation_id: 1,
            user_id: 1,
            rating: 10,
            comment: 'Sve je dobro'
        })

        await tracks.create({
            track1: true,
            track2: false,
            track3: false
        })
        await tracks.create({
            track1: false,
            track2: false,
            track3: true
        })
        await tracks.create({
            track1: false,
            track2: true,
            track3: false
        })

        console.log('OK')
    } catch (e) {
        console.log(e)
    }
}

export default db
