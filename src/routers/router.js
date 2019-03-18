import userRouter from './userRouter'
import feedbackRouter from './feedbackRouter'
import presentationRouter from './presentationRouter'

const router = (express, app) => {
    let router = express.Router()
    userRouter(router)
    app.use('/user', router)

    router = new express.Router()
    feedbackRouter(router)
    app.use('/feedback', router)

    router = new express.Router()
    presentationRouter(router)
    app.use('/presentation', router)
}

export default router
