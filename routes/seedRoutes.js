const express = require('express');
const {seedUser} = require('../controllers/seedController');
const router =express.Router();

router.get('/',seedUser);

module.exports = router;