const express = require('express');
const router = express.Router();

const principleController = require('../controllers/principle_controller.js');

router.get('/', principleController.getPrinciple);

module.exports = router;