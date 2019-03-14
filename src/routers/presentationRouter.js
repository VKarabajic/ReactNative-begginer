var express = require('express');
import presentationController from '../controllers/presentationController'
var router = express.Router();

//require controller modules
router.get('/', presentationController.getAll)
router.get('/:id', presentationController.getOne)
router.put('/update/:id', presentationController.update)
router.post('/create/:id', presentationController.create)
router.delete('/delete/:id', presentationController.deletePresentation)

export default router;