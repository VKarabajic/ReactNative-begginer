import express from 'express'
import feedbackController from '../controllers/feedbackController'
const router = express.Router()

router.get('/', feedbackController.getAll)
router.get('/:id', feedbackController.getOne)
router.post('/create', feedbackController.create)
router.put('/update/:id', feedbackController.update)
router.delete('/delete/:id', feedbackController.deleteFeedback)

export default router