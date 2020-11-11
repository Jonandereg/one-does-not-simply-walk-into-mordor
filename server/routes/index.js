const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.post('/', controller.moveFrodo);

module.exports = router;
