import presentationController from '../controllers/presentationController'

const presentationRouter = (router) =>{
    router.get('/', presentationController.getAll)
    router.get('/:id', presentationController.getOne)
    router.post('/create', presentationController.create)
    router.put('/update/:id', presentationController.update)
    router.delete('/delete/:id', presentationController.deletePresentation)

}

export default presentationRouter