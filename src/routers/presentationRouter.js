var express = require('express');
import presentationController from '../controllers/presentationController'
var router = express.Router();

//require controller modules
router.get('/', presentationController.getAll);
router.get('/:id', presentationController.getOne);
router.get('/update/:id', presentationController.update)
router.get('/create/:id', presentationController.create)
router.get('/delete/:id', presentationController.deletePresentation)

export default router;