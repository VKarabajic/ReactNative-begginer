import express from 'express'
import feedbackController from '../controllers/feedbackController'
const router = express.Router()

router.get('/', feedbackController.getAll)
router.get('/:id', feedbackController.getOne)
router.post('/create', feedbackController.create)

export default router