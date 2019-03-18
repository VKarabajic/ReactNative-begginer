import presentationController from '../controllers/presentationController'
import bodyParser from 'body-parser'

const presentationRouter = router => {
    router.use(bodyParser.json())
    router.use(
        bodyParser.urlencoded({
            extended: false
        })
    )

    router.get('/', presentationController.getAll)
    router.get('/:id', presentationController.getOne)
    router.post('/create', presentationController.create)
    router.put('/update/:id', presentationController.update)
    router.delete('/delete/:id', presentationController.deletePresentation)
}

export default presentationRouter
