
//Display list of presentations
const getAll = (req, res) => {
    res.send('presentation list (not implemented)');
}
//Display one presentation
const getOne = (req, res) => {
    res.send('delete presentation (not implemented)');
}
//Update presentation
const update = (req, res) => {
    res.send('presentation with id:' + req.params.id + ' would have been updated');
}
//Create presentation
const create = (req, res) => {
    res.send('presentation with id:' + req.params.id + ' would have been created');
}
//Delete presentation
const deletePresentation = (req, res) => {
    res.send('presentation with id:' + req.params.id + ' would have been deleted');
}

export default { getAll, getOne, update, create, deletePresentation }

