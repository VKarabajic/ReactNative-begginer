import userController from '../controllers/userController'
import bodyParser from 'body-parser'

const userRouter = router => {
    router.use(bodyParser.json())
    router.use(
        bodyParser.urlencoded({
            extended: false
        })
    )

    router.get('/', userController.getAll)
    router.get('/:id', userController.getOne)
    router.post('/create', userController.create)
}

export default userRouter
