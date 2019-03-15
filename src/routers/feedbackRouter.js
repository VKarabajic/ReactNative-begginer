import feedbackController from '../controllers/feedbackController'
import bodyParser from 'body-parser';

const feedbackRouter = (router) => {
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({
        extended: false
    }));

    router.get('/', feedbackController.getAll)
    router.get('/:id', feedbackController.getOne)
    router.post('/create', feedbackController.create)

}

export default feedbackRouter