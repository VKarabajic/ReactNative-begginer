import userController from '../controllers/userController'

const userRouter = (router) =>{
router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.post('/create', userController.create)

}

export default userRouter