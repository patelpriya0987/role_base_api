const express = require('express');
const router = express.Router();
const principleRouter = require('./principleRouter')

router.use('/principle',principleRouter);

module.exports = router;