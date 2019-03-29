import tracksController from '../controllers/tracksController'
import bodyParser from 'body-parser'

const tracksRouter = router => {
    router.use(bodyParser.json())
    router.use(
        bodyParser.urlencoded({
            extended: false
        })
    )

    router.get('/', tracksController.getAll)
    router.get('/:id', tracksController.getOne)
    router.post('/create', tracksController.create)
}

export default tracksRouter
