import express from 'express'
import userController from '../controllers/userController'
const router = express.Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.post('/create', userController.create)


export default router