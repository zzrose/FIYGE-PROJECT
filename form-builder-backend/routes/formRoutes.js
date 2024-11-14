const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const authMiddleware = require('../middleware/authMiddleware');

// Define routes with authentication middleware
// router.post('/save', authMiddleware, formController.saveForm);
// router.get('/:id', authMiddleware, formController.getForm);
// router.put('/update/:id', authMiddleware, formController.updateForm);
// router.get('/list', authMiddleware, formController.listForms);
router.post('/save', formController.saveForm);
router.get('/:id', formController.getForm);
router.put('/update/:id', formController.updateForm);
router.get('/list', formController.listForms);

module.exports = router;
