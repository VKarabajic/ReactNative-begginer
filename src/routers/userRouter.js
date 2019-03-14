import express from 'express'
import userController from '../controllers/userController'
const router = express.Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.post('/create', userController.create)
router.put('/update/:id', userController.update)
router.delete('/delete/:id', userController.deleteUser)

export default router