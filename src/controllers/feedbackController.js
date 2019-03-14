const getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: getAll feedbacks')
}

const getOne = (req, res) => {
    res.send("NOT IMPLEMENTED: getOne feedback with id " + req.params.id)
}

const create = (req, res) => {
    res.send('NOT IMPLEMENTED: create feedback')
}

const update = (req, res) => {
    res.send("NOT IMPLEMENTED: update feedback with id " + req.params.id)
}

const deleteFeedback = (req, res) => {
    res.send("NOT IMPLEMENTED: delete feedback with id " + req.params.id)
}


export default { getAll , getOne, create, update, deleteFeedback }