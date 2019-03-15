import Sequelize from 'sequelize'
import User from '../models/users'

//connect to db and return user instance
const connectToDb = () => {
    const sequelize = new Sequelize('global.globalConfig.database', global.globalConfig.mysql_user, global.globalConfig.mysql_password, {
        host: 'localhost',
        dialect: 'mysql'
    })

    return User(sequelize, Sequelize)
}


const getAll = async (req, res) => {
    try {
        const user = connectToDb()
        const result = await user.findAll()
        res.send(result)

    } catch (e) {
        console.log(e)
        res.status(500).send({
            error: 'unexpected error'
        })
    }

}


const getOne = async (req, res) => {
    try {
        const user = connectToDb()
        const result = await user.findById(req.params.id)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({
            error: 'unexpected error'
        })
    }

}


const create = async (req, res) => {
    try {
        const user = connectToDb()
        let newUser = req.body
        let result;
        if (newUser.annonymous === 1) {
            result = await user.create({
                first_name: 'anon',
                last_name: 'anon',
                email: 'anon',
                phone: 'anon',
                annonymous: 1
            })
            return res.status(201).send(result)
        }

        result = await user.create({
            first_name: newUser.firstName,
            last_name: newUser.lastName,
            email: newUser.email,
            phone: newUser.phone,
            annonymous: 0
        })

        return res.status(201).send(result)

    } catch (e) {
        console.log(e)
        res.status(500).send({
            error: 'unexpected error'
        })
    }
}


export default {
    getAll,
    getOne,
    create
}