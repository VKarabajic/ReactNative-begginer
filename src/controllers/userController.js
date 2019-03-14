const getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: getAll users')
}

const getOne = (req, res) => {
    res.send("NOT IMPLEMENTED: getOne user with id " + req.params.id)
}

const create = (req, res) => {
    res.send('NOT IMPLEMENTED: create user')
}

const update = (req, res) => {
    res.send("NOT IMPLEMENTED: update user with id " + req.params.id)
}

const deleteUser = (req, res) => {
    res.send("NOT IMPLEMENTED: delete user with id " + req.params.id)
}


export default { getAll , getOne, create, update, deleteUser }