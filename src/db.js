import User from './models/users';
import Presentation from './models/presentations';
import Feedback from './models/feedback';
import Sequelize from 'sequelize';

const db = async () => {
    try {
        //db connection setup
        const sequelize = new Sequelize(
            global.config.database,
            global.config.mysql_user,
            global.config.mysql_password,
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        );

        try {
            //drop foreign key constraints and then drop tables
            await sequelize.query(
                'alter table feedbacks drop foreign key feedbacks_ibfk_1;'
            );
            await sequelize.query(
                'alter table feedbacks drop foreign key feedbacks_ibfk_2;'
            );
            await sequelize.query('DROP TABLE feedbacks, users, presentations');
        } catch (e) {
            console.log('Failed to drop tables');
        }

        //create new tables
        const user = User(sequelize, Sequelize);
        const presentation = Presentation(sequelize, Sequelize);
        const feedback = Feedback(sequelize, Sequelize);

        //set associations
        presentation.hasMany(feedback, {
            foreignKey: 'presentation_id',
            onDelete: 'cascade'
        });
        user.hasMany(feedback, {
            foreignKey: 'user_id',
            onDelete: 'cascade'
        });

        feedback.belongsTo(user, {
            foreignKey: 'user_id'
        });

        feedback.belongsTo(presentation, {
            foreignKey: 'presentation_id'
        });

        //sync tables
        await user.sync({
            force: true
        });

        await presentation.sync({
            force: true
        });

        await feedback.sync({
            force: true
        });

        //fill tables
        await user.create({
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@mail.com',
            phone: '777-7777-7777',
            annonymous: 0
        });

        await user.create({
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'jane.doe@mail.com',
            phone: '888-8888-8888',
            annonymous: 0
        });

        await presentation.create({
            name: 'prezentacija 1',
            speaker: 'Roberto Kedmenec',
            duration: 30,
            start: Date.now()
        });

        await feedback.create({
            presentation_id: 1,
            user_id: 1,
            rating: 10,
            comment: 'Sve je dobro'
        });
        console.log('OK');
    } catch (e) {
        console.log(e);
    }
};

export default db;
