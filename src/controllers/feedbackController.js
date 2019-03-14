const getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: getAll feedbacks')
}

const getOne = (req, res) => {
    res.send("NOT IMPLEMENTED: getOne feedback with id " + req.params.id)
}

const create = (req, res) => {
    res.send('NOT IMPLEMENTED: create feedback')
}


export default { getAll , getOne, create}