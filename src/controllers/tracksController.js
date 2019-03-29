import Sequelize from 'sequelize'
import Tracks from '../models/tracks'

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

    return Tracks(sequelize, Sequelize)
}

const getAll = async (req, res) => {
    try {
        const tracks = connectToDb()
        const result = await tracks.findAll()
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
        const tracks = connectToDb()
        const result = await tracks.findByPk(req.params.id)
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
        const tracks = connectToDb()
        let newtracks = req.body
        let result

        result = await tracks.create({
            track1: newtracks.track1,
            track2: newtracks.track2,
            track3: newtracks.track3
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
