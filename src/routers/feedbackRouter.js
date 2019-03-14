import feedbackController from '../controllers/feedbackController'

const feedbackRouter = (router) => {
router.get('/', feedbackController.getAll)
router.get('/:id', feedbackController.getOne)
router.post('/create', feedbackController.create)

}

export default feedbackRouter