import userController from '../controllers/userController'

const userRouter = (router) =>{
    router.get('/', userController.getAll)
    router.get('/:id', userController.getOne)
    router.post('/create', userController.create)
    router.put('/update/:id', userController.update)
    router.delete('/delete/:id', userController.deleteUser)

}

export default userRouter