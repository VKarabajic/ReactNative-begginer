import Sequelize from 'sequelize'
import Feedback from '../models/feedback'

const connectToDb = () => {
    const dbConfig = global.config
    const sequelize = new Sequelize(
        dbConfig.database,
        dbConfig.mysql_user,
        dbConfig.mysql_password,
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    )

    return Feedback(sequelize, Sequelize)
}

const getAll = async (req, res) => {
    try {
        const feedback = connectToDb()
        const result = await feedback.findAll()
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
        const feedback = connectToDb()
        const result = await feedback.findById(req.params.id)
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
        const feedback = connectToDb()
        let newFeedback = req.body
        let result

        result = await feedback.create({
            presentation_id: newFeedback.presentation_id,
            user_id: newFeedback.user_id,
            rating: newFeedback.rating,
            comment: newFeedback.comment
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
