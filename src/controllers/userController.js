const getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: getAll users')
}

const getOne = (req, res) => {
    res.send("NOT IMPLEMENTED: getOne user with id " + req.params.id)
}

const create = (req, res) => {
    res.send('NOT IMPLEMENTED: create user')
}

export default { getAll , getOne, create }